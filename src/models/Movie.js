const { Schema, model } = require("mongoose");

const movieSchema = new Schema({
  title: String,
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
  tag: String,
  tagline: String,
  createdBy: String,
  createdAt: Date,
  deleted: Boolean,
});

module.exports = model("Movie", movieSchema);
