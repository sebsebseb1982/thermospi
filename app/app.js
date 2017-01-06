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
    'settings',
    'lodash'
  ])
  .constant("moment", moment)
  .config(
    (
      $stateProvider,
      $urlRouterProvider
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
    }
  );
