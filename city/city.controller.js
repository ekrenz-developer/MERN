const City = require('./city.model');
const Itinerary = require('../itinerary/itinerary.model');

const getCities = (req, res) => {
  City.find({})
    .populate('itineraries')
    .then(cities => {
      res.json(cities).status(204);
    });
};

module.exports = {
  getCities
};
