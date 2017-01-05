'use strict';

angular
    .module('heater.services', ['ngResource'])
    .factory(
        'Temperatures',
        [
            '$resource',
            '$cookies',
            function ($resource, $cookies) {
                return $resource('https://api.mlab.com/api/1/databases/thermospi/collections/temperatures?apiKey=' + $cookies.get('mLab'), {}, {
                    getAll: {
                        method: 'GET',
                        isArray: true
                    }
                });
            }
        ]
    );
