const mongoose = require('mongoose');
const Activity = require('../activity/activity.model');

const itinerarySchema = new mongoose.Schema({
  title: String,
  username: String,
  userphotos: [],
  rating: String,
  duration: String,
  price: String,
  hashtags: [],
  activities: [{ type: mongoose.Schema.Types.ObjectId, ref: 'activity' }]
});

module.exports = mongoose.model('itinerary', itinerarySchema);
