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
    'heater',
    'settings',
    'settings.controllers'
  ])
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
