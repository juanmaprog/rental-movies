require("../connection");
const Movie = require("../models/Movie");

const moviesController = {
  getAll(req, res) {
    Movie.find()
      .then((movies) => res.send(movies))
      .catch((error) => {
        console.error(error);
        res
          .status(500)
          .send({ message: error.message });
      });
  },
};

// const moviesFactory = {};

module.exports = moviesController;
