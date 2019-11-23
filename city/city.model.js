const mongoose = require('mongoose');
const citySchema = new mongoose.Schema({
  city: String,
  country: String,
  itineraries: [{ type: mongoose.Schema.Types.ObjectId, ref: 'itinerary' }]
});

module.exports = mongoose.model('city', citySchema);
