const { Schema, model } = require("mongoose");

const artirtSchema = new Schema({
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
  createdAt: Date,
  active:Boolean,
  deleted:Boolean,
});

module.exports = model("Artist", artirtSchema);
