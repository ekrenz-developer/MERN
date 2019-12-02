const mongoose = require('mongoose');
const activitySchema = new mongoose.Schema({
	title: String,
	name: String,
	address: String,
	image: String,
	rating: String,
	price: String,
	observation: String
});

module.exports = mongoose.model('activity', activitySchema);