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
  .module('heater.directives', [])
  .controller('temperatureChartController', ['$scope', 'Temperatures', function($scope, Temperatures) {
    $scope.temperatures = Temperatures.getAll();
  }])
  .directive('temperatureChart', function() {
    return {
      'controller': 'temperatureChartController as temperatureChart',
      'template': '<highchart id="chart1"></highchart>'
    };
  });

