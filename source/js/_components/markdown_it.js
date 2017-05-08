import { reduce } from 'lodash';
const $ = window.$ = window.jQuery = require('jquery');

export function initAbbr() {
  $('abbr').each(function () {
    const $this = $(this);
    $this.tooltip({
      delay: 50,
      position: 'top',
      tooltip: $this.attr('title')
    });
    $this.attr('title', '');
  });
}

export function initFootnote() {
  const $refs = $('.footnote-ref');
  $refs.each(function () {
    const $ref = $(this);
    const $footnote = $($ref.find('a').attr('href'));
    $ref.tooltip({
      delay: 50,
      position: 'top',
      tooltip: reduce($footnote.find('p').contents(), function asText(text, next) {
        return text + (next.nodeType === 3 ? next.nodeValue : '');
      }, '')
    })
  });
}
