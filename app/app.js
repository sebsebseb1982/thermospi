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
    'settings',
    'lodash'
  ])
  .constant("moment", moment)
  .config(
    (
      $stateProvider,
      $urlRouterProvider,
      $sceProvider,
      $httpProvider
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

      $httpProvider.defaults.headers.common.Authorization = 'Bearer 12345abcde';

      //$sceProvider.enabled(false);
    }
  );
