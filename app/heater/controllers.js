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
  .controller('HeaterController', ['$scope', 'SetPoints', function($scope, SetPoints) {

    let ratio = 10;

    let updateSetPoint = (sliderId, modelValue, highValue, pointerType) => {
      alert(modelValue / ratio);
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

