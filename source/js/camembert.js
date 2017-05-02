const $ = window.$ = window.jQuery = require('jquery');
require('materialize-css');

import { forEach } from 'lodash';
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

const $window = $(window);

forEach([
  resetCoverHeight,
  resetPushpin,
  initSideNav,
  initProxyEvent,
  initModal,
  initMaterialBox,
  initSocials,
  initSearchBar
], function (module) {
  $window.load(module);
});

forEach([
  resetCoverHeight,
  resetPushpin
], function (module) {
  $window.resize(module);
});