const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
	email: String,
	password: String,
	userName: String,
	firstName: String,
	lastName: String,
	country: String,
	conditions: String
});

module.exports = mongoose.model('user', userSchema);