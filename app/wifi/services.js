'use strict';

angular
  .module('wifi.services', ['ngResource'])
  .factory(
    'Wifi',
    [
      '$resource',
      function ($resource) {
        return $resource('/home/wifi', {}, {
          getStatus: {
            method: 'GET'
          }
        });
      }
    ]
  )
