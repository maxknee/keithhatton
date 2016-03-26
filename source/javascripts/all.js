'use strict';

$(document).ready(function ($) {
  var $grid = $('.grid').masonry({
    // options
    itemSelector: '.discipline-type',
    columnWidth: '.grid-sizer',
    percentPosition: true,
    gutter: '.gutter-sizer',
    ftiWdith: true
  });

  $grid.imagesLoaded().progress(function () {
    $grid.masonry('layout');
  });
});
//# sourceMappingURL=all.js.map
