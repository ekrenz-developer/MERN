const mongoose = require('mongoose');

mongoose
    .connect('mongodb+srv://<user>:<pass>@cluster0-nbmj8.mongodb.net/MYtinerary?retryWrites=true&w=majority')
    .catch(
        (err) => {
            console.log('Error ', err.message)
        }
    );

const db = mongoose.connection;

module.exports = db;