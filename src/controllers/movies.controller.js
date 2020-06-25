const moviesCtrl = {};

// Models
const Movie = require("../models/Movie");
const helperString = require("../helpers/helperString");

moviesCtrl.renderMovieForm = (req, res) => {
  console.log("req.body aa", req.body);
  res.render("movies/new-movie");
};

moviesCtrl.createNewMovie = async (req, res) => {
  const errors = [];  
  if (errors.length > 0) {
    res.render("movies/new-movie", {
      errors,
      title,
      description,
    });
  } else {
    const newMovie = new Movie(req.body);
    newMovie._id = require("../helpers/helperString").getGUID();
    console.log("newMovie:", newMovie);
    await newMovie.save();
    req.flash("success_msg", "Movie Added Successfully");
    res.redirect("/movies");
  }
};

moviesCtrl.renderMovies = async (req, res) => {  
  const movies = await Movie.find().sort({ title: "asc" });
  res.render("movies/all-movies", { movies: movies });
};

moviesCtrl.renderEditForm = async (req, res) => {
  const movie = await Movie.findById(req.params.id);
  if (movie.user != req.user.id) {
    req.flash("error_msg", "Not Authorized");
    return res.redirect("/movies");
  }
  res.render("movies/edit-movie", { movie: movie });
};

moviesCtrl.updateMovie = async (req, res) => {
  const { title, description } = req.body;
  await Movie.findByIdAndUpdate(req.params.id, { title, description });
  req.flash("success_msg", "Movie Updated Successfully");
  res.redirect("/movies");
};

moviesCtrl.deleteMovie = async (req, res) => {
  await Movie.findByIdAndDelete(req.params.id);
  req.flash("success_msg", "Movie Deleted Successfully");
  res.redirect("/movies");
};

module.exports = moviesCtrl;
