const $ = window.$ = window.jQuery = require('jquery');
require('materialize-css');

import { forEach } from 'lodash';
import initSocials from './_components/socials';
import initSearchBar from './_components/search_bar';
import { initAbbr, initFootnote } from './_components/markdown_it';

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

const $window = $(window);

forEach([
  resetCoverHeight,
  resetPushpin,
  initAbbr,
  initFootnote,
  initSideNav,
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