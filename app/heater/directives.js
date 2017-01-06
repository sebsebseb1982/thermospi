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
  .controller(
    'temperatureChartController',
    [
      '$scope',
      'TemperatureSeries',
      '_',
      ($scope, TemperatureSeries, _) => {
        $scope.config = {
          options: {
            chart: {
              type: 'spline'
            },
            tooltip: {
              style: {
                padding: 10,
                fontWeight: 'bold'
              }
            }
          },
          title: {
            text: 'Températures'
          },
          loading: false,
          xAxis: {
            type: 'datetime'
          },
          series:[],
          useHighStocks: false,
          size: {
            height: 500
          }
        };

        TemperatureSeries.lastNHours(24).then(function (series) {
          _.forEach(series, (aSerie) => {
            $scope.config.series.push(aSerie);
          });
        });

      }
    ]
  )
  .directive('temperatureChart', function () {
    return {
      'controller': 'temperatureChartController as temperatureChart',
      'template': '<highchart id="chart1" config="config"></highchart>'
    };
  });

