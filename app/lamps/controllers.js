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
  .module('lamps.controllers', [])
  .controller(
    'LampsController',
    [
      '$scope',
      'Lamps',
      function ($scope, Lamps) {
        $scope.lamps = Lamps.getAll();
      }
    ]
  );

