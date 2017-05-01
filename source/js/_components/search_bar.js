const $ = window.$ = window.jQuery = require('jquery');
import moment from 'moment';
import strip_html from 'striptags';
import list_tags from './list_tags';
import truncate from './truncate';

export default function initSearchBar() {
  const $searchForm = $('#searchForm');
  const $searchInput = $searchForm.find('input[type=search]');
  const $modal = $('#searchModal');
  const $algoriaForm = $('#algoliaForm');
  const $algoliaInput = $algoriaForm.find('input[type=search]');
  const $algoliaEmpty = $('#algoliaEmpty');
  const $algoliaResult = $('#algoliaResult');

  if (!$algoriaForm.length) return;

  const client = require('algoliasearch')($algoriaForm.data('applicationId'), $algoriaForm.data('apiKey'));
  const index = client.initIndex($algoriaForm.data('indexName'));

  $searchForm.submit(function (e) {
    $algoliaInput.val($searchInput.val());
    $algoriaForm.submit();
    $modal.modal('open');
  });

  $algoriaForm.submit(function (e) {
    index.search($algoliaInput.val(), function (err, content) {
      if (err) throw err;
      
      $algoliaResult.empty();
      if (content.nbHits < 1) return $algoliaEmpty.removeClass('hide');
      
      $algoliaEmpty.addClass('hide');

      const dateFormat = $algoliaResult.data('dateFormat');
      content.hits.forEach(function renderHit(hit) {
        $algoliaResult.append([
          '<li class="collection-item">',
            '<h4 class="post-title">',
              `<a href="${hit.permalink}">${hit.title}</a>`,
            '</h4>',
            `<time>${moment(hit.date).format(dateFormat)}</time>`,
            '<p class="post-summary">',
              `<span>${truncate(strip_html(hit.excerpt || hit.content), { length: 200 })}</span>`,
              `<a href="${hit.permalink}" class="more">Read more</a>`,
            '</p>',
            list_tags(hit.tags, { show_count: false }),
          '</li>'
        ].join(''));
      });
    });
  });
}