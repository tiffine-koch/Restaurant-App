'use strict';

var app = angular.module('myApp', ['ui.router']);

app.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider
    .state('home', { url: '/', templateUrl: '/partials/home.html', controller: 'homeCtrl'})
    .state('entry', { url: '/entry', templateUrl: 'partials/entry.html', controller: 'entryCtrl' })

  $urlRouterProvider.otherwise('/');
});
