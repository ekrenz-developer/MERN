const User = require('./user.model');
const jwt = require("jsonwebtoken");

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
	User.findOne({
		email: req.body.email
	}).then((user) => {
		if(!user){
			return res.send({
				status: 'failure',
				error: 'usuario no econtrado'
			}).status(500)
		}
		if(req.body.password != user.password){
			return res.send({
				status: 'failure',
				error: 'contraseña incorrecta'
			}).status(500)
		}
		const options = {
			expiresIn: 30
		}
		jwt.sign(
			req.body,
			process.env.KEY,
			options,
			(err, token) => {
				if(err){
					res.json({
						status: 'failure',
						error: 'There was an error'						
					})
				}else{
					res.json({
						user: user,
						token: token
					})
				}
			}
		)
	}).catch((err) => {
		res.send({
			status: 'failure',
			error: err.message
		}).status(500)
	})
}

module.exports = {
	addUser,
	getUser
};