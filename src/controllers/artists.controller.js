const artistsCtrl = {};

// Models
const Artist = require("../models/Artist");

artistsCtrl.renderArtistForm = (req, res) => {
  res.render("artists/new-artist");
};

artistsCtrl.createNewArtist = async (req, res) => {
  const errors = [];
  if (errors.length > 0) {
    res.render("artists/new-artist", {
      errors,
      title,
      description,
    });
  } else {
    const newArtist = new Artist(req.body);
    newArtist._id = require("../helpers/helperString").getGUID();
    await newArtist.save();
    req.flash("success_msg", "Artist Added Successfully");
    res.redirect("/artists");
  }
};

artistsCtrl.renderArtists = async (req, res) => {
  const artists = await Artist.find().populate("countries");
  res.render("artists/all-artists", { artists: artists });
};

artistsCtrl.renderEditForm = async (req, res) => {
  const artist = await Artist.findById(req.params.id);
  if (artist.user != req.user.id) {
    req.flash("error_msg", "Not Authorized");
    return res.redirect("/artists");
  }
  res.render("artists/edit-artist", { artist: artist });
};

artistsCtrl.updateArtist = async (req, res) => {
  const { title, description } = req.body;
  await Artist.findByIdAndUpdate(req.params.id, { title, description });
  req.flash("success_msg", "Artist Updated Successfully");
  res.redirect("/artists");
};

artistsCtrl.deleteArtist = async (req, res) => {
  await Artist.findByIdAndDelete(req.params.id);
  req.flash("success_msg", "Artist Deleted Successfully");
  res.redirect("/artists");
};

module.exports = artistsCtrl;
