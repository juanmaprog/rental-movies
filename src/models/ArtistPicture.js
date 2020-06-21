const { Schema, model } = require("mongoose");

const artistPictureSchema = new Schema({
  _id: String,
  photo: String,
  tag: String,
  createdBy: String,
  createdAt: { type: Date, default: new Date() },
  active: { type: Boolean, default: true },
  deleted: { type: Boolean, default: false },
  artist: { type: Schema.Types.ObjectId, ref: "Artist" },
});

module.exports = model("ArtistPicture", artistPictureSchema);
