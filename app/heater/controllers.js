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
  .controller('HeaterController', ['$scope', 'Temperatures', function($scope, Temperatures) {
     $scope.temperatures = Temperatures.getAll();
   }]);

