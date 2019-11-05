const express = require("express");
const app = express();
const cors = require("cors");
const db = require('./db');
const routerCity = require('./city/city.router');

app.use(cors())
app.use(routerCity)
app.listen(8080, () => {
    console.log('Server is up!') 
})
