const router = require('express').Router();
const userController = require('./user.controller');

console.log('aca')

router.post("/user/register", userController.addUser);
router.get("/user/login", userController.getUser);

module.exports = router;