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

    SetPoints.getLastSetPoint().$promise.then((lastSetPoint) => {
      $scope.slider = {
        value: lastSetPoint.value,
        options: {
          floor: 16,
          ceil: 25,
          onEnd: updateSetPoint
        }
      };
    });
   }]);

