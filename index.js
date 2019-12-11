const express = require("express");
const app = express();
const cors = require("cors");
const db = require('./db');
const bodyParser = require("body-parser");
const routerCity = require('./api/city/city.router');
const routerUser = require('./api/user/user.router.js');

app.use(bodyParser.json());
app.use(cors());

app.use(routerCity)
app.use(routerUser)

app.listen(8080, () => {
    console.log('Server is up!') 
})
