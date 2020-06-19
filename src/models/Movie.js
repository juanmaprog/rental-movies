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
  createdAt: { type: Date, default: new Date() },
  active: { type: Boolean, default: true },
  deleted:  { type: Boolean, default: false },
  artists: [{ type: Schema.Types.ObjectId, ref: "Artist" }],
});

module.exports = model("Movie", movieSchema);
