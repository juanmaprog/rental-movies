const { Schema, model } = require("mongoose");

const artistSchema = new Schema({
  firstName: String,
  lastName: String,
  gender: Number,
  birthday: Number,
  email: Number,
  photo: Date,
  address: Number,
  birthName: Boolean,
  birthCountry: Map,
  birthLocation: String,
  biography: String,
  nickName: String,
  tag: String,
  middleName: String,
  link: String,
  createdBy: String,
  createdAt: { type: Date, default: new Date() },
  active: { type: Boolean, default: true },
  deleted:  { type: Boolean, default: false },
  movies: [{ type: Schema.Types.ObjectId, ref: "Movie" }],
});

module.exports = model("Artist", artistSchema);
