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
      'LampsControl',
      'RGBConverter',
      '_',
      function ($scope, Lamps, LampsControl, RGBConverter, _) {

        $scope.updateRGB = (lamp) => {
          lamp.rgb = RGBConverter.hexToRGB(lamp.hex);
        };

        Lamps.getAll().$promise.then((lamps) => {
          $scope.lamps = lamps;
          _.forEach($scope.lamps, (lamp) => {
            LampsControl.readState({code: lamp.code}).$promise.then((state) => {
              lamp.state = state;
              lamp.hex = RGBConverter.rgbToHex(lamp.state.state.rgb);
            });
          });
        });
      }
    ]
  );

