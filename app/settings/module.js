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
  .module('settings', [])
  .config(
    (
      $stateProvider
    ) => {
      $stateProvider.state(
        'thermospi.settings',
        {
          'url': 'settings',
          'templateUrl': 'settings/view.html',
          'controller': 'SettingsController'
        }
      );
    }
  );

