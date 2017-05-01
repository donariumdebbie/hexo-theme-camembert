import { memoize } from 'lodash';
import Clipboard from 'clipboard';
const $ = window.$ = window.jQuery = require('jquery');
require('jssocials');

export default function initSocials() {
  jsSocials.shares.url = {
    label: 'Copy URL',
    logo: 'mdi mdi-link-variant',
    renderer: function () {
      const $result = $('<div></div>');
      const a = $('<a>').attr({
        class: 'jssocials-share-link',
        href: 'javascript:;',
        'data-clipboard-text': window.location.href
      }).append('<i class="mdi mdi-link-variant jssocials-share-logo"></i>')
      .mouseout(function () {
        a.tooltip('remove');
      });

      const clipboard = new Clipboard(a[0]);
      clipboard.on('success', function () {
        a.tooltip({
          delay: 50,
          tooltip: 'Copied!',
          position: 'top'
        });
        a.trigger('mouseover');
      });

      return $result.append(a);
    }
  };

  const replaceLogo = memoize(function (share) {
    const registered = jsSocials.shares[share];
    if (registered) registered.logo = registered.logo.replace(/fa([ \-])/g, 'mdi$1');
    return share;
  });

  $('.socials').each(function () {
    const $this = $(this);
    if (!$this.data('shares')) return;
    $this.data('shares', $this.data('shares').split(/,/).map(replaceLogo));
    $this.jsSocials($this.data());
  });
}