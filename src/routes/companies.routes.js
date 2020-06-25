const express = require("express");
const router = express.Router();

// Controller
const {
  renderCompanyForm,
  createNewCompany,
  renderCompanies,
  renderEditForm,
  updateCompany,
  deleteCompany,
} = require("../controllers/companies.controller");

// Helpers
const { isAuthenticated } = require("../helpers/auth");

// New Movie
router.get("/companies/add", isAuthenticated, renderCompanyForm);

router.post("/companies/new-company", isAuthenticated, createNewCompany);

// Get All Companies
router.get("/companies", isAuthenticated, renderCompanies);

// Edit Companies
router.get("/companies/edit/:id", isAuthenticated, renderEditForm);

router.put("/companies/edit-company/:id", isAuthenticated, updateCompany);

// Delete Companies
router.delete("/companies/delete/:id", isAuthenticated, deleteCompany);

module.exports = router;
