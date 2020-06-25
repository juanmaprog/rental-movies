const express = require("express");
const router = express.Router();

// Controller
const {
  renderCustomerForm,
  createNewCustomer,
  renderCustomers,
  renderEditForm,
  updateCustomer,
  deleteCustomer,
} = require("../controllers/customers.controller");

// Helpers
const { isAuthenticated } = require("../helpers/auth");

// New Customer
router.get("/customers/add", isAuthenticated, renderCustomerForm);

router.post("/customers/new-customer", isAuthenticated, createNewCustomer);

// Get All Customers
router.get("/customers", isAuthenticated, renderCustomers);

// Edit Customers
router.get("/customers/edit/:id", isAuthenticated, renderEditForm);

router.put("/customers/edit-customer/:id", isAuthenticated, updateCustomer);

// Delete Customers
router.delete("/customers/delete/:id", isAuthenticated, deleteCustomer);

module.exports = router;
