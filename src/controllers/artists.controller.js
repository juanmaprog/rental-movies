const artistsCtrl = {};

// Models
const Artist = require("../models/Artist");

artistsCtrl.renderArtistForm = (req, res) => {
  res.render("artists/new-artist");
};

artistsCtrl.createNewArtist = async (req, res) => {
  const { title, description } = req.body;
  const errors = [];
  if (!title) {
    errors.push({ text: "Please Write a Title." });
  }
  if (!description) {
    errors.push({ text: "Please Write a Description" });
  }
  if (errors.length > 0) {
    res.render("artists/new-artist", {
      errors,
      title,
      description,
    });
  } else {
    const newArtist = new Artist({ title, description });
    newArtist.user = req.user.id;
    await newArtist.save();
    req.flash("success_msg", "Artist Added Successfully");
    res.redirect("/artists");
  }
};

artistsCtrl.renderArtists = async (req, res) => {
  // const artists = await Artist.find({ user: req.user.id }).sort({ date: "desc" });
  // res.render("artists/all-artists", { artists: artists });
  const artists = await Artist.find().populate("countries") ; //.sort({ firstName: "asc" });
  // res.send(artists);
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
