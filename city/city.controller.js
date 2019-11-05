const City = require("./city.model")

const getCities = (req, res) => {
    City.find({})
        .then(
            (cities) => {
                res.json(cities).status(204)
            }
        )
}

module.exports = {
    getCities
}