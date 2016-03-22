var express = require('express');
var router = express.Router();

var Restaurant = require('../models/restaurant');

router.get('/', function(req, res, next) {
  Restaurant.find({}, function(err, restaurants) {
  if(err) {
    res.status(400).send(err);
    return;
  }
  res.send(restaurants);
  });
});

router.post('/', function(req, res, next) {
  var restaurant = new Restaurant(req.body);
  console.log(restaurant);
  restaurant.save(function(err, savedRestaurant) {
    console.log('savedRestaurant:', savedRestaurant);
    res.send(savedRestaurant);
  });
});

router.put('/:id', function(req, res) {
  Restaurant.findByIdAndUpdate(req.params.id, req.body, function(err, restaurant) {
      if(err) {
        res.status(400).send(err);
        return;
      } else {
        restaurant.save(function(err, savedRestaurant) {
          console.log('savedRestaurant:', savedRestaurant);
          res.send(savedRestaurant);
      })
    }
  })
})

router.delete('/:id', function(req, res) {
  Restaurant.findById(req.params.id, function(err, restaurant) {
    restaurant.remove(function(err) {
      if(err) {
        res.status(400).send(err);
        return;
      }
      console.log('successly deleted');
      res.send();
    })
  })
})

module.exports = router;
