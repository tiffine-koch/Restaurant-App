'use strict';

var app = angular.module('myApp');

app.controller('homeCtrl', function($scope, $http, $state) {
  console.log('homeCtrl working');

  $http({
    method: "GET",
    url: "/restaurants"
    }).then(function(response){
      $scope.restaurants= response.data;
    }, function(error){
      console.log('error');
  });
});

app.controller('entryCtrl', function($scope, $http, $state) {

  $scope.submitEntryForm = function() {

    console.log('entryCtrl working');
    $scope.restaurants = [];
    var restaurant = {Phone: $scope.restaurant.phone, Name: $scope.restaurant.name, PartySize: $scope.restaurant.party, Indoor: $scope.restaurant.indoor, Arrived: $scope.restaurant.arrived};
    $scope.restaurants.push(restaurant);

    $http({
      method: 'POST',
      url: '/restaurants',
      data: restaurant
      }).then(function(response){
        swal("Your destination has been uploaded!");
      }, function(err){
        console.error(err);
      })
      $scope.restaurant = {};
    }  
});
