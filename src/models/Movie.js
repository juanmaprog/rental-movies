const { Schema, model } = require("mongoose");

const MovieSchema = new Schema({
  _id: String,
  title: { type: String, index: true },
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
  createdBy: { type: String, default: "system" },
  createdAt: { type: Date, default: new Date() },
  active: { type: Boolean, default: true },
  deleted: { type: Boolean, default: false },
  user: { type: Schema.Types.ObjectId, ref: "User" },
  artists: [{ type: Schema.Types.ObjectId, ref: "Artist" }],
  photos: [{ type: Schema.Types.ObjectId, ref: "MoviePicture" }],
});

module.exports = model("Movie", MovieSchema);
