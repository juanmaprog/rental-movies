const { Schema, model } = require("mongoose");

const moviePictureSchema = new Schema({
  _id: String,
  photo: String,
  tag: String,
  createdBy: String,
  createdAt: { type: Date, default: new Date() },
  active: { type: Boolean, default: true },
  deleted: { type: Boolean, default: false },
  movie: { type: Schema.Types.ObjectId, ref: "Movie" },
});

module.exports = model("MoviePicture", moviePictureSchema);
