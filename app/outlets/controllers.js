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
      function ($scope, Outlets, OutletsControl) {
        $scope.outlets = Outlets.getAll();

        $scope.sendCommand = (outlet, state) => {
          console.log(outlet, state);
          OutletsControl.setState(
            {
              code: outlet.code,
              state: state ? 'on' : 'off'
            }
          );
        };
      }
    ]
  );

