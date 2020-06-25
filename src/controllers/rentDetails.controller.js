require("../connection");
const Movie = require("../models/RentDetail");

const rentDetailController = {
  getAll(req, res) {
    Movie.find()
      .then((entities) => res.send(entities))
      .catch((error) => {
        console.error(error);
        res.status(500).send({ message: error.message });
      });
  },
};

module.exports = rentDetailController;
