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
  .module(
  'lamps',
  [
    'lamps.services',
    'lamps.controllers'
  ]
)
  .config(
  (
    $stateProvider
  ) => {
    $stateProvider.state(
      'thermospi.lamps',
      {
        'url': 'lamps',
        'templateUrl': 'lamps/view.html',
        'controller': 'LampsController'
      }
    );
  }
);

