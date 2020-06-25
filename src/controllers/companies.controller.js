const companiesCtrl = {};

// Models
const Company = require("../models/Company");

companiesCtrl.renderCompanyForm = (req, res) => {
  res.render("companies/new-company");
};

companiesCtrl.createNewCompany = async (req, res) => {
  const errors = [];
  if (errors.length > 0) {
    res.render("companies/new-company", {
      errors,
      title,
      description,
    });
  } else {
    const newcompany = new Company(req.body);
    newcompany._id = require("../helpers/helperString").getGUID();
    await newcompany.save();
    req.flash("success_msg", "Artist Added Successfully");
    res.redirect("/companies");
  }
};

companiesCtrl.renderCompanies = async (req, res) => {
  const companies = await Company.find().populate('country').sort({ name: "asc" });
  res.render("companies/all-companies", { companies: companies });
};

companiesCtrl.renderEditForm = async (req, res) => {
  const company = await Company.findById(req.params.id);  
  res.render("companies/edit-company", { company: company });
};

companiesCtrl.updateCompany = async (req, res) => {
  const { title, description } = req.body;
  await Company.findByIdAndUpdate(req.params.id, { title, description });
  req.flash("success_msg", "Company Updated Successfully");
  res.redirect("/companies");
};

companiesCtrl.deleteCompany = async (req, res) => {
  await Company.findByIdAndDelete(req.params.id);
  req.flash("success_msg", "Company Deleted Successfully");
  res.redirect("/companies");
};

module.exports = companiesCtrl;
