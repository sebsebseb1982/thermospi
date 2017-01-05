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
  .module('settings.controllers', ['ngCookies'])
  .controller('SettingsController', ['$scope', '$cookies', function($scope, $cookies) {
     $scope.mLab = $cookies.get('mLab');

     $scope.setCookie = (key, value) => {
       $cookies.put(
        key,
        value,
        {
          'expires': new Date(new Date().setFullYear(new Date().getFullYear() + 100))
        }
      );
      console.log(key, $cookies.get(key));
     };
   }]);

