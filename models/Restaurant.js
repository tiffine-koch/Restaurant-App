'use strict';

var mongoose = require('mongoose');

var restaurantSchema = mongoose.Schema({
  Time: Date,
  Phone: Number,
  Name: String,
  PartySize: Number,
  Indoor: Boolean,
  Arrived: Boolean
});

var Restaurant = mongoose.model('Restaurant', restaurantSchema);

module.exports = Restaurant;
