const router = require('express').Router();
const userController = require('./user.controller');

router.get("/users/register", userController.addUser);
router.get("/users/login", userController.getUser);

module.exports = router;