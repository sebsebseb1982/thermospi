'use strict';

angular
  .module('wifi.services', ['ngResource'])
  .factory(
    'Wifi',
    [
      '$resource',
      '$cookies',
      function ($resource, $cookies) {
        return $resource('/home/wifi', {}, {
          getStatus: {
            method: 'GET',
            headers: {
              'token': $cookies.get('apikey')
            }
          },
          setStatus: {
            method: 'POST',
            headers: {
              'token': $cookies.get('apikey')
            }
          }
        });
      }
    ]
  )
