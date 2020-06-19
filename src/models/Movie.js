const { Schema, model } = require("mongoose");

const movieSchema = new Schema({
  createdBy: String,
  createdAt: Date,
  tag: String,
  title: String,
  tagline: String,
  plot: String,
  awards: String,
  rating: Number,
  genre: Number,
  releaseDate: Date,
  runTime: Number,
  isColor: Boolean,
  photo: Map,
  webSite: String,
  aspectRatio: String,
  languaje: String,
  category: String,
});

module.exports = model("Movie", movieSchema);
