const { Schema, model } = require("mongoose");
const { schema } = require("./Movie");

const artistSchema = new Schema({
  _id: String,
  firstName: String,
  lastName: String,
  gender: Number,
  birthday: Date,
  email: String,
  phone: String,
  address: String,
  birthCountry: String,
  birthLocation: String,
  biography: String,
  nickName: String,
  tag: String,
  middleName: String,
  link: String,
  active: { type: String },
  createdBy: String,
  createdAt: { type: Date, default: new Date() },
  deleted: { type: Boolean, default: false },
  birthName: String,
  user: { type: Schema.Types.ObjectId, ref: "User" },
  movies: [{ type: Schema.Types.ObjectId, ref: "Movie" }],
  photos: [{ type: Schema.Types.ObjectId, ref: "ArtistPicture" }],
});

module.exports = model("Artist", artistSchema);
