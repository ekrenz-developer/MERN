const City = require('./city.model');

const getCities = (req, res) => {
  City.find({})
    .populate({ path: 'itineraries', populate: { path: 'activities'}})
    .then(cities => {
      res.json(cities).status(204);
    });
};

module.exports = {
  getCities
};
