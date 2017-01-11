'use strict';

/**
 * @ngdoc overview
 * @name thermospiApp
 * @description
 * # thermospiApp
 *
 * Main module of the application.
 */
angular
  .module('thermospiApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ui.router',
    'highcharts-ng',
    'heater',
    'outlets',
    'lamps',
    'settings',
    'lodash',
    'rzModule',
    'rgb-converter'
  ])
  .constant("moment", moment)
  .config(
    (
      $stateProvider,
      $urlRouterProvider,
      $sceProvider
    ) => {
      $urlRouterProvider.otherwise('/heater');

      $stateProvider.state(
        'thermospi',
        {
          'url': '/',
          'views': {
            'content' : {
              'template': '<data-ui-view/>'
            }
          }
        }
      );

      $sceProvider.enabled(false);
    }
  );
