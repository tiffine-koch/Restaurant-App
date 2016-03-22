'use strict';

var app = angular.module('myApp');

app.controller('homeCtrl', function($scope, $http, $state) {
  $http({
    method: "GET",
    url: "/restaurants"
    }).then(function(response){
      $scope.restaurants= response.data;
      console.log($scope.restaurants);
    }, function(error){
      console.log('error');
  });

  $scope.deleteRest = function(index, restaurant) {
    var id = restaurant._id
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

  function guestIndoors() {
    if(!selected) {
      Indoor = false;
    } else {
      Indoor = true;
    }
  }

  function guestArrived() {
    if(!selected) {
      Arrived = false;
    } else {
      Arrive = true;
    }
  }
  $scope.selectedButton;
  $scope.selectButton = function(id) {
      $scope.selectedButton = id;
      console.log('selected');
  }
});

app.controller('entryCtrl', function($scope, $http, $state) {
  $scope.submitEntryForm = function() {
    var currentTime = new Date;
    var restaurant = {date: $scope.restaurant.date, phone: $scope.restaurant.phone, name: $scope.restaurant.name, partySize: $scope.restaurant.party, indoor: $scope.restaurant.indoor, arrived: $scope.restaurant.arrived};
    $http({
      method: 'POST',
      url: '/restaurants',
      data: restaurant
      }).then(function(response){
        swal("Your reservation has been uploaded!");
      }, function(err){
        console.error(err);
      })
      $scope.restaurant = {};
    }
});
