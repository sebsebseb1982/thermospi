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
  .controller('temperatureChartController', ['$scope', 'ChartConfig', function($scope, ChartConfig) {
    $scope.config = ChartConfig.lastNHours();
  }])
  .directive('temperatureChart', function() {
    return {
      'controller': 'temperatureChartController as temperatureChart',
      'template': '<highchart id="chart1" config="config"></highchart>'
    };
  });

