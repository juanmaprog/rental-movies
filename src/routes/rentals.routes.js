const express = require("express");
const router = express.Router();

// Controller
const {
  renderRentalForm,
  createNewRental,
  renderRentals,
  renderEditForm,
  updateRental,
  deleteRental,
} = require("../controllers/rentals.controller");

// Helpers
const { isAuthenticated } = require("../helpers/auth");

// New Rental
 router.get("/rentals/add", isAuthenticated, renderRentalForm);


router.post("/rentals/new-rental", isAuthenticated, createNewRental);

// Get All Rentals
router.get("/rentals", isAuthenticated, renderRentals);

// Edit Rentals
router.get("/rentals/edit/:id", isAuthenticated, renderEditForm);

router.put("/rentals/edit-rental/:id", isAuthenticated, updateRental);

// Delete Rentals
router.delete("/rentals/delete/:id", isAuthenticated, deleteRental);

module.exports = router;
