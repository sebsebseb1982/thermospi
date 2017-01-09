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
  .module('outlets.controllers', [])
  .controller(
    'OutletsController',
    [
      '$scope',
      'Outlets',
      'OutletsControl',
      '$cookies',
      function ($scope, Outlets, OutletsControl, $cookies) {
        $scope.outlets = Outlets.getAll();

        $scope.sendCommand = (outlet, state) => {
          OutletsControl.setState(
            {code: outlet.code},
            {state: state}
          );
        };

        $scope.buttonsClass = $cookies.get('apikey') ? '' : 'disabled';
      }
    ]
  );

