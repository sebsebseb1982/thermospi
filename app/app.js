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
    'ui.router'
  ])
  .config(
    (
      $stateProvider,
      $urlRouterProvider
    ) => {
      $urlRouterProvider.otherwise('/home');
      $stateProvider.state(
        'thermospi',
        {
          'url': '/home',
          'views': {
            'content' : {
              'templateUrl': 'heater/view.html'
            }
          }
        }
      );
    }
  );
