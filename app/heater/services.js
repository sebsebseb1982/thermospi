'use strict';

angular
  .module('heater.services', ['ngResource'])
  .factory(
    'Temperatures',
    [
      '$resource',
      '$cookies',
      function ($resource, $cookies) {
        return $resource('/api/1/databases/thermospi/collections/temperatures?s={date:-1}&apiKey=' + $cookies.get('mLab'), {}, {
          getAll: {
            method: 'GET',
            isArray: true
          }
        });
      }
    ]
  )
  .factory(
    'Sensors',
    [
      '$resource',
      '$cookies',
      function ($resource, $cookies) {
        return $resource('/api/1/databases/thermospi/collections/sensors?apiKey=' + $cookies.get('mLab'), {}, {
          getAll: {
            method: 'GET',
            isArray: true
          }
        });
      }
    ]
  )
  .factory(
    'SetPoints',
    [
      '$resource',
      '$cookies',
      function ($resource, $cookies) {
        return $resource('/api/1/databases/thermospi/collections/:collection?apiKey=' + $cookies.get('mLab'), {}, {
          getAllRealSetPoints: {
            method: 'GET',
            isArray: true,
            params: {
              collection: 'realSetPoints',
              s: '{date:1}'
            }
          },
          getLastSetPoint: {
            method: 'GET',
            isArray: false,
            params: {
              collection: 'setPoints',
              s: '{"date":-1}',
              l:1
            },
            transformResponse: (data, headers) => {
             return JSON.parse(data)[0];
            }
          }
        });
      }
    ]
  )
  .factory(
    'Status',
    [
      '$resource',
      '$cookies',
      function ($resource, $cookies) {
        return $resource('/api/1/databases/thermospi/collections/realStatus?s={date:1}&apiKey=' + $cookies.get('mLab'), {}, {
          getAll: {
            method: 'GET',
            isArray: true
          }
        });
      }
    ]
  )
  .factory(
    'TemperaturesSeries',
    [
      'Temperatures',
      'Sensors',
      '_',
      '$q',
      'moment',
      (Temperatures, Sensors, _, $q, moment) => {
        return {
          lastNHours: (hours) => {

            return $q((resolve, reject) => {

              $q.all([
                Temperatures.getAll().$promise,
                Sensors.getAll().$promise
              ]).then(function (data) {

                let nHoursAgo = moment().subtract(hours, 'hours');

                let series = [];

                _.forEach(
                  data[1],
                  function (sensor) {

                    let aTemperatureSerie = {
                      'name': sensor.label,
                      'data': _.map(
                        _.filter(
                          data[0],
                          (record) => {
                            return record.probe === sensor.id && moment(new Date(record.date.$date)).isAfter(nHoursAgo);
                          }
                        ),
                        (record) => {
                          return [new Date(record.date.$date).getTime(), record.temperature];
                        }
                      )
                    };

                    series.push(aTemperatureSerie);
                  }
                );

                resolve(series);
              });
            });
          }
        };
      }
    ]
  )
  .factory(
    'SetPointsSerie',
    [
      'SetPoints',
      '_',
      '$q',
      'moment',
      (SetPoints, _, $q, moment) => {
        return {
          lastNHours: (hours) => {

            return $q((resolve, reject) => {

              SetPoints.getAllRealSetPoints().$promise.then(function (setPoints) {
                let nHoursAgo = moment().subtract(hours, 'hours');

                setPoints.push({
                  'value': setPoints[setPoints.length - 1].value,
                  'date': {
                    '$date': new Date().getTime()
                  }
                });

                resolve({
                  'name': 'Consigne',
                  'step': true,
                  'color': '#FF4040',
                  'type': 'line',
                  'data': _.map(
                    _.filter(
                      setPoints,
                      (setPoint) => {
                        return moment(new Date(setPoint.date.$date)).isAfter(nHoursAgo);
                      }
                    ),
                    (setPoint) => {
                      return [new Date(setPoint.date.$date).getTime(), setPoint.value];
                    }
                  )
                });
              });
            });
          }
        };
      }
    ]
  )
  .factory(
    'StatusBands',
    [
      'Status',
      '_',
      '$q',
      'moment',
      (Status, _, $q, moment) => {
        return {
          lastNHours: (hours) => {

            return $q((resolve, reject) => {

              Status.getAll().$promise.then(function (status) {
                let nHoursAgo = moment().subtract(hours, 'hours');

                let getAPlotBand = function (from, to) {
                  return {
                    from: from,
                    to: to,
                    color: '#ffb3b3',
                    label: {
                      text: Math.floor((Math.abs(to - from) / 1000) / 60) + ' min.',
                      style: {
                        color: '#606060'
                      },
                      verticalAlign: 'middle',
                      rotation: -90
                    },
                    zIndex: 2
                  }
                };

                let statusBands = [];
                let from;

                _.forEach(status, (aStatus) => {
                  if (from === undefined && aStatus.value) {
                    from = new Date(aStatus.date.$date).getTime();
                  } else if (from !== undefined && !aStatus.value) {
                    let to = new Date(aStatus.date.$date).getTime();
                    statusBands.push(getAPlotBand(from, to));
                    from = undefined;
                  }
                });

                if (from) {
                  var virtualTo = new Date().getTime();
                  statusBands.push(getAPlotBand(from, virtualTo));
                }

                resolve(statusBands);
              });
            });
          }
        };
      }
    ]
  );
