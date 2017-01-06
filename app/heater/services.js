'use strict';

angular
  .module('heater.services', ['ngResource'])
  .factory(
    'Temperatures',
    [
      '$resource',
      '$cookies',
      function ($resource, $cookies) {
        return $resource('https://api.mlab.com/api/1/databases/thermospi/collections/temperatures?s={"date":-1}&apiKey=' + $cookies.get('mLab'), {}, {
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
        return $resource('https://api.mlab.com/api/1/databases/thermospi/collections/sensors?apiKey=' + $cookies.get('mLab'), {}, {
          getAll: {
            method: 'GET',
            isArray: true
          }
        });
      }
    ]
  )
  .factory(
    'TemperatureSeries',
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
  );
