const rentalsCtrl = {};

// Models
const Rental = require("../models/Rental");

rentalsCtrl.renderRentalForm = (req, res) => {
  res.render("rentals/new-rental");
};

rentalsCtrl.createNewRental = async (req, res) => {
  const { title, description } = req.body;
  const errors = [];
  if (!title) {
    errors.push({ text: "Please Write a Title." });
  }
  if (!description) {
    errors.push({ text: "Please Write a Description" });
  }
  if (errors.length > 0) {
    res.render("rentals/new-rental", {
      errors,
      title,
      description,
    });
  } else {
    const newRental = new Rental({ title, description });
    newRental.user = req.user.id;
    await newRental.save();
    req.flash("success_msg", "Rental Added Successfully");
    res.redirect("/rentals");
  }
};
//========= ALL RENTALS =========
rentalsCtrl.renderRentals = async (req, res) => {
  // const rentals = await Rental.find({ user: req.user.id }).sort({ date: "desc" });
  // const rentals = await Rental.find().sort({ date: "desc" }).limit(20);
  // const rentals = await Rental.find().populate('customer').sort({ date: "desc" }).limit(3);
  // const rentals = await Rental.find().populate('customer','firstName').sort({ date: "desc" }).limit(3);
  // const rentals = await Rental.find().populate('customer').sort({ date: "desc" }).limit(3);
  const rentals = await Rental.find().sort({ date: "desc" }).limit(100).populate('customer').populate('rentalDetails');
  // console.log(rentals);
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
