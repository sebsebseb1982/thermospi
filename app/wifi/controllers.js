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
  .module('wifi.controllers', [])
  .controller(
    'WifiController',
    [
      '$scope',
      'Wifi',
      function ($scope, Wifi) {
        $scope.status = Wifi.getStatus();
      }
    ]
  );

