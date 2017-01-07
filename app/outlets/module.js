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
    'outlets',
    [
      'outlets.services',
      'outlets.controllers'
    ]
  )
  .config(
    (
      $stateProvider
    ) => {
      $stateProvider.state(
        'thermospi.outlets',
        {
          'url': 'outlets',
          'templateUrl': 'outlets/view.html',
          'controller': 'OutletsController'
        }
      );
    }
  );

