const express = require("express");
const router = express.Router();

// Controller
const {
  renderArtistForm,
  createNewArtist,
  renderArtists,
  renderEditForm,
  updateArtist,
  deleteArtist,
} = require("../controllers/artists.controller");

// Helpers
const { isAuthenticated } = require("../helpers/auth");

// New Artist
router.get("/artists/add", isAuthenticated, renderArtistForm);

router.post("/artists/new-artist", isAuthenticated, createNewArtist);

// Get All Artists
router.get("/artists", isAuthenticated, renderArtists);

// Edit Artists
router.get("/artists/edit/:id", isAuthenticated, renderEditForm);

router.put("/artists/edit-movie/:id", isAuthenticated, updateArtist);

// Delete Artists
router.delete("/artists/delete/:id", isAuthenticated, deleteArtist);

module.exports = router;
