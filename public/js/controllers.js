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

  $scope.deleteRest = function(index, restaurant) {
    console.log('delete button');
    var id = restaurant._id
    console.log('id', id);
    var deleted = $scope.restaurants.splice(index, 1);
    $http({
      method: 'DELETE',
      url: `/restaurants/${id}`
    })
    .then(function(data) {
      console.log('success');
    }, function(err) {
      console.error(err);
    })
  }
  $scope.editRest = function(index, restaurant) {
    var id = restaurant._id
    console.log('id', id);
    var edited = $scope.restaurants.splice(index, 1);
    $http({
      method: 'PUT',
      url: `/restaurants/${id}`
    })
    .then(function(data) {
      console.log('success');
    }, function(err) {
      console.error(err);
    })
  }
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
