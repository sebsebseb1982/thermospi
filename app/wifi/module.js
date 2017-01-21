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
  .module(
    'wifi',
    [
      'wifi.services',
      'wifi.controllers'
    ]
  )
  .config(
    (
      $stateProvider
    ) => {
      $stateProvider.state(
        'thermospi.wifi',
        {
          'url': 'wifi',
          'templateUrl': 'wifi/view.html',
          'controller': 'WifiController'
        }
      );
    }
  );

