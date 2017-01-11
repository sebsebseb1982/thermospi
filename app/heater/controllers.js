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
  .module('heater.controllers', [])
  .controller('HeaterController', ['$scope', 'SetPoints', 'HeaterControl', function($scope, SetPoints, HeaterControl) {

    let ratio = 10;

    let updateSetPoint = (sliderId, modelValue, highValue, pointerType) => {
      HeaterControl.addSetPoint({value:modelValue / ratio});
      setInterval(() => {
        // TODO lancer evt de MAJ
      }, 15 * 1000 /* ms */);
    };

    $scope.lastSetPoint = SetPoints.getLastSetPoint();

    $scope.lastSetPoint.$promise.then((lastSetPoint) => {
      $scope.slider = {
        value: lastSetPoint.value * ratio,
        options: {
          floor: 15 * ratio,
          ceil: 25 * ratio,
          onEnd: updateSetPoint,
          translate: (value, sliderId, label) => {
            return value / ratio;
          }
        }
      };
    });
   }]);

