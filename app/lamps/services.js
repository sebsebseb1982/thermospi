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
  )
  .factory(
    'LampsControl',
    [
      '$resource',
      '$cookies',
      function ($resource, $cookies) {
        return $resource('/home/lamps/:id/state', {id: '@id'}, {
          readState: {
            method: 'GET',
            headers: {
              'token': $cookies.get('apikey')
            }
          }
        });
      }
    ]
  );
