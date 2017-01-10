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

    let updateSetPoint = (sliderId, modelValue, highValue, pointerType) => {
      alert(modelValue);
    };

    $scope.lastSetPoint = SetPoints.getLastSetPoint();

    $scope.lastSetPoint.$promise.then((lastSetPoint) => {
      $scope.slider = {
        value: lastSetPoint.value,
        options: {
          floor: 15,
          ceil: 25,
          onEnd: updateSetPoint
        }
      };
    });
   }]);

