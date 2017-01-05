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
  .module('heater', [])
  .config(
    (
      $stateProvider
    ) => {
      $stateProvider.state(
        'thermospi.heater',
        {
          'url': 'heater',
          'templateUrl': 'heater/view.html'
        }
      );
    }
  );

