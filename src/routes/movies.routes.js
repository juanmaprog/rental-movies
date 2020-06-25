const express = require("express");
const router = express.Router();

// Controller
const {
  renderMovieForm,
  createNewMovie,
  renderMovies,
  renderEditForm,
  updateMovie,
  deleteMovie,
} = require("../controllers/movies.controller");

// Helpers
const { isAuthenticated } = require("../helpers/auth");

// New Movie
router.get("/movies/add", isAuthenticated, renderMovieForm);

router.post("/movies/new-movie", isAuthenticated, createNewMovie);
// router.post("/movies/new-movie", createNewMovie);

// All Movies
router.get("/movies", isAuthenticated, renderMovies);

// Edit Movies
router.get("/movies/edit/:id", isAuthenticated, renderEditForm);

router.put("/movies/edit-movie/:id", isAuthenticated, updateMovie);

// Delete Movies
router.delete("/movies/delete/:id", isAuthenticated, deleteMovie);

module.exports = router;
