const mongoose = require('mongoose');

mongoose
    .connect('mongodb+srv://ekrenz:Casamia001@cluster0-nbmj8.mongodb.net/MYtinerary?retryWrites=true&w=majority')
    .catch(
        (err) => {
            console.log('Error ', err.message)
        }
    );

const db = mongoose.connection;

module.exports = db;