app = angular.module('BadBeats', [
  'ngRoute',
  'templates'
]).config(function ($routeProvider, $locationProvider) {
  $routeProvider
    .when('/', {
      templateUrl: 'home.html',
      controller: 'HomeCtrl'
    });
    $locationProvider.html5Mode({
      enabled: true,
      requireBase: false
    });
});