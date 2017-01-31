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
        Wifi.getStatus().$promise.then((status) => {
          console.log('status', status);
          $scope.status = status;
        });
      }
    ]
  );

