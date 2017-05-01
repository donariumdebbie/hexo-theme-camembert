const $ = window.$ = window.jQuery = require('jquery');
require('materialize-css');

import initSocials from './_components/socials';
import initSearchBar from './_components/search_bar';

function resetPushpin() {
  $('.pushpin').each(function () {
    const $this = $(this);
    const $target = $($this.data('target'));
    if ($target.length < 1) return $this.removeClass('pushpin');

    $this.pushpin({
      top: $target.offset().top,
      bottom: $target.offset().top + $target.outerHeight() - $this.height()
    });
  });
}

function initModal() {
  $('.modal').each(function () {
    const $this = $(this);
    $this.appendTo('body');
    $this.modal($this.data());
  });
}

function initMaterialBox() {
  $('main img').each(function () {
    const $this = $(this);
    $this.addClass('materialboxed');
    $this.materialbox();
  });
}

function resetCoverHeight() {
  const $cover = $('.cover');
  const minHeight = $cover.find('.cover-content').outerHeight();
  [$cover, $cover.find('.cover-background')].forEach($elem => $elem.css('min-height', minHeight));
}

function initSideNav() {
  $('.side-nav-button').sideNav({ closeOnClick: true });
}

function initProxyEvent() {
  $('[data-proxy-event]').each(function () {
    const $this = $(this);
    $this.on($this.data('proxy-event'), (e) => {
      $($this.data('target')).trigger(e.type);
    });
  });
}

window.onload = function () {
  const initModules = [
    resetCoverHeight,
    resetPushpin,
    initSideNav,
    initProxyEvent,
    initModal,
    initMaterialBox,
    initSocials,
    initSearchBar
  ];

  Promise.all(
    initModules.map(function (fn) {
      return Promise.resolve().then(fn);
    })
  ).then(() => {
    // TODO: Hide loader
  });
};
window.onresize = function () {
  resetCoverHeight();
  resetPushpin();
};