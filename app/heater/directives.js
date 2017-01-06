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
      'TemperaturesSeries',
      'SetPointsSerie',
      'StatusBands',
      '_',
      '$q',
      ($scope, TemperatureSeries, SetPointsSerie, StatusBands, _, $q) => {
        $scope.nLastHours = 24;

        let updateSeries = () => {

          $q.all([
            TemperatureSeries.lastNHours($scope.nLastHours),
            SetPointsSerie.lastNHours($scope.nLastHours + 4),
            StatusBands.lastNHours($scope.nLastHours)
          ]).then(function (data) {

            let series = []

            _.forEach(data[0], (aSerie) => {
              series.push(aSerie);
            });
            series.push(data[1]);

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
                type: 'datetime',
                plotBands: data[2]
              },
              series: series,
              useHighStocks: false,
              size: {
                height: 500
              }
            };

          });
        };

        updateSeries();

        setInterval(
          updateSeries,
          5 * 60 * 1000
        );
      }
    ]
  )
  .directive('temperatureChart', function () {
    return {
      'controller': 'temperatureChartController as temperatureChart',
      'template': '<highchart id="chart1" config="config"></highchart>'
    };
  });

