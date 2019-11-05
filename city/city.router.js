const router = require('express').Router();
const cityController = require('./city.controller');

router.get("/cities/all", cityController.getCities);

module.exports = router;