const getGUID = require("../helpers/helperString");
const customersCtrl = {};

// Models
const Customer = require("../models/Customer");

customersCtrl.renderCustomerForm = (req, res) => {
  res.render("customers/new-customer");
};

customersCtrl.createNewCustomer = async (req, res) => {
  const errors = [];
  if (errors.length > 0) {
    res.render("customers/new-customer", {
      errors,
      title,
      description,
    });
  } else {
    const newCustomer = new Customer(req.body);
    newCustomer._id = require("../helpers/helperString").getGUID();
    await newCustomer.save();
    req.flash("success_msg", "Customer Added Successfully");
    res.redirect("/customers");
  }
};

customersCtrl.renderCustomers = async (req, res) => {
  const customers = await Customer.find().sort({ firstName: "asc" });
  res.render("customers/all-customers", { customers: customers });
};

customersCtrl.renderEditForm = async (req, res) => {
  const customer = await Customer.findById(req.params.id);
  if (customer.user != req.user.id) {
    req.flash("error_msg", "Not Authorized");
    return res.redirect("/customers");
  }
  res.render("customers/edit-customer", { customer: customer });
};

customersCtrl.updateCustomer = async (req, res) => {
  const { title, description } = req.body;
  await Customer.findByIdAndUpdate(req.params.id, { title, description });
  req.flash("success_msg", "Customer Updated Successfully");
  res.redirect("/customers");
};

customersCtrl.deleteCustomer = async (req, res) => {
  await Customer.findByIdAndDelete(req.params.id);
  req.flash("success_msg", "Customer Deleted Successfully");
  res.redirect("/customers");
};

module.exports = customersCtrl;
