const { Schema, model } = require("mongoose");

const movieSchema = new Schema({
  _id: String,
  title: String,
  plot: String,
  awards: String,
  rating: Number,
  genre: Number,
  releaseDate: Date,
  runTime: Number,
  isColor: Boolean,
  webSite: String,
  aspectRatio: String,
  language: String,
  category: String,
  tag: String,
  tagline: String,
  createdBy: String,
  createdAt: { type: Date, default: new Date() },
  active: { type: Boolean, default: true },
  deleted:  { type: Boolean, default: false },
  artists: [{ type: Schema.Types.ObjectId, ref: "Artist" }],
  photos: [{ type: Schema.Types.ObjectId, ref: "MoviePicture" }],
});

module.exports = model("Movie", movieSchema);
