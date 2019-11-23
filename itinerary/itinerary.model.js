const mongoose = require('mongoose');
const itinerarySchema = new mongoose.Schema({
  title: String,
  username: String,
  userphotos: [],
  rating: String,
  duration: String,
  price: String,
  hashtags: [],
  activities: []
});

module.exports = mongoose.model('itinerary', itinerarySchema);
