const rentalsCtrl = {};

// Models
const Rental = require("../models/Rental");

rentalsCtrl.renderRentalForm = (req, res) => {
  res.render("rentals/new-rental");
};

rentalsCtrl.createNewRental = async (req, res) => {
  const errors = [];
  if (errors.length > 0) {
    res.render("rentals/new-rental", {
      errors,
      title,
      description,
    });
  } else {
    const newRental = new Rental(req.body);
    newRental._id = require("../helpers/helperString").getGUID();
    await newRental.save();
    req.flash("success_msg", "Rental Added Successfully");
    res.redirect("/rentals");
  }
};
//========= ALL RENTALS =========
rentalsCtrl.renderRentals = async (req, res) => {  
  const rentals = await Rental.find().sort({ date: "desc" }).limit(100).populate('customer').populate('rentalDetails');
  res.render("rentals/all-rentals", { rentals: rentals });
  
};

rentalsCtrl.renderEditForm = async (req, res) => {
  const rental = await Rental.findById(req.params.id);
  if (rental.user != req.user.id) {
    req.flash("error_msg", "Not Authorized");
    return res.redirect("/rentals");
  }
  res.render("rentals/edit-rental", { rental: rental });
};

rentalsCtrl.updateRental = async (req, res) => {
  const { title, description } = req.body;
  await Rental.findByIdAndUpdate(req.params.id, { title, description });
  req.flash("success_msg", "Rental Updated Successfully");
  res.redirect("/rentals");
};

rentalsCtrl.deleteRental = async (req, res) => {
  await Rental.findByIdAndDelete(req.params.id);
  req.flash("success_msg", "Rental Deleted Successfully");
  res.redirect("/rentals");
};

module.exports = rentalsCtrl;
