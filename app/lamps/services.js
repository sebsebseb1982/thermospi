'use strict';

angular
  .module('lamps.services', ['ngResource'])
  .factory(
    'Lamps',
    [
      '$resource',
      '$cookies',
      function ($resource, $cookies) {
        return $resource('/api/1/databases/thermospi/collections/lamps?apiKey=' + $cookies.get('mLab'), {}, {
          getAll: {
            method: 'GET',
            isArray: true
          }
        });
      }
    ]
  );
