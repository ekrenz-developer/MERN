const User = require('./user.model');

const addUser = (req, res) => {
	User.create({
		email: req.body.email,
		password: req.body.password,
		userName: req.body.userName,
		firstName: req.body.firstName,
		lastName: req.body.lastName,
		country: req.body.country,
		conditions: req.body.conditions
	}).then((createdUser) => {
		res.json(createdUser).status(200)
	}).catch((err) => {
		res.json(err).status(500)
	})
};

const getUser = (req, res) => {
	User.find({
		_id: req.params._id
	}).then((user) => {res.json(user).status(204)})
}

module.exports = {
	addUser,
	getUser
};