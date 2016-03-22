'use strict';

var app = angular.module('myApp');

app.controller('homeCtrl', function($scope, $http, $state, $stateParams) {
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

app.controller('entryCtrl', function($scope, $http, $state, $stateParams) {
  console.log('entryCtrl working');
  $scope.restaurants = [];
  var restaurant = {Time: $scope.restaurant.Time, Phone: $scope.restaurant.Phone, Name: $scope.restaurant.Name, PartySize: $scope.restaurant.PartySize, Indoor: $scope.restaurant.Indoor, Arrived: $scope.restaurant.Arrived};
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
  };

});
