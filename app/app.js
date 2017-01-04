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
  .config(function ($stateProvider) {
    $stateProvider.state(
      'thermospi',
      {
        'url': '/',
        'views': {
          'content' : {
            'templateUrl': 'heater/view.html'
          }
        }
      }
    );
  });
