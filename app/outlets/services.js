'use strict';

angular
  .module('outlets.services', ['ngResource'])
  .factory(
    'Outlets',
    [
      '$resource',
      '$cookies',
      function ($resource, $cookies) {
        return $resource('/api/1/databases/thermospi/collections/outlets?apiKey=' + $cookies.get('mLab'), {}, {
          getAll: {
            method: 'GET',
            isArray: true
          }
        });
      }
    ]
  )
  .factory(
    'OutletsControl',
    [
      '$resource',
      '$cookies',
      function ($resource, $cookies) {
        return $resource('https://' + $cookies.get('host') + ':' + $cookies.get('port') + '/api/outlet/:code', {code: '@code'}, {
          setState: {
            method: 'POST',
            headers: {
              'token': $cookies.get('apikey')
            }
          }
        });
      }
    ]
  );
