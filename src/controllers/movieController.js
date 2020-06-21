require("../connection");
const Movie = require("../models/Movie");

const movieController = {
  getAll(req, res) {
    Movie.find()
      .then((entities) => res.send(entities))
      .catch((error) => {
        console.error(error);
        res.status(500).send({ message: error.message });
      });
  },
  create(req, res){
    Movie.create(req.body)
    .then(movie =>{
      movie.add
    })
  }
};

module.exports = movieController;