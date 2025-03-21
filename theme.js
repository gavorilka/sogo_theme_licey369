/* -*- Mode: javascript; indent-tabs-mode: nil; c-basic-offset: 2 -*- */

(function() {
  'use strict';

  angular.module('SOGo.Common')
    .config(configure)

  /**
   * @ngInject
   */
  configure.$inject = ['$mdThemingProvider'];
  function configure($mdThemingProvider) {

    /**
     * The SOGo palettes are defined in js/Common/Common.app.js:
     *
     * - sogo-green
     * - sogo-blue
     * - sogo-grey
     *
     * The Material palettes are also available:
     *
     * - red
     * - pink
     * - purple
     * - deep-purple
     * - indigo
     * - blue
     * - light-blue
     * - cyan
     * - teal
     * - green
     * - light-green
     * - lime
     * - yellow
     * - amber
     * - orange
     * - deep-orange
     * - brown
     * - grey
     * - blue-grey
     *
     * See https://material.angularjs.org/latest/Theming/01_introduction
     * and https://material.io/archive/guidelines/style/color.html#color-color-palette
     *
     * You can also define your own palettes. See js/Common/Common.app.js.
     */

    // Create new background palette from grey palette
    var greyMap = $mdThemingProvider.extendPalette('grey', {
      // background color of sidebar selected item,
      // background color of right panel,
      // background color of menus (autocomplete and contextual menus)
      '200': 'ECEFF4',
      // background color of sidebar
      '300': 'D8DEE9',
       // background color of the busy periods of the attendees editor
      '1000': '9EAECD'
    });
    $mdThemingProvider.definePalette('frost-grey', greyMap);

    var blueMap = $mdThemingProvider.extendPalette('blue', {
      '400': '2754a7',
      '600': '6c9edb',
      'A700': '7aa3da'
    });
    $mdThemingProvider.definePalette('licey-blue', blueMap);

     // Apply new palettes to the default theme, remap some of the hues
    $mdThemingProvider.theme('default')
      .primaryPalette('licey-blue', { // Здесь можно изменить непосредственно цвет почтовой морды
        'default': '400',  // background color of top toolbars
        'hue-1': '400',
        'hue-2': '600',    // background color of sidebar toolbar
        'hue-3': 'A700'
      })
      .accentPalette('licey-blue', { // Здесь можно изменить цвет страницы входа.
        'default': '600',  // background color of fab buttons
        'hue-1': '300',    // background color of center list toolbar
        'hue-2': '300',
        'hue-3': 'A700'
      })
      .backgroundPalette('frost-grey');

    $mdThemingProvider.generateThemesOnDemand(false);
  }
})();
