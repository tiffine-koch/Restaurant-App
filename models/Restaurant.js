'use strict';

var mongoose = require('mongoose');

var restaurantSchema = mongoose.Schema({
  date: Date,
  phone: Number,
  name: String,
  partySize: Number,
  indoor: Boolean,
  arrived: Boolean
});

var Restaurant = mongoose.model('Restaurant', restaurantSchema);

module.exports = Restaurant;
