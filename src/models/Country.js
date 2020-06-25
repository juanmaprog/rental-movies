const { Schema, model } = require("mongoose");

const CountrySchema = new Schema({
  _id: String,
  name: String,
  acronym: String,
  flag: String,
  tag: String,
  createdBy: String,
  createdAt: { type: Date, default: new Date() },
  active: { type: Boolean, default: true },
  deleted: { type: Boolean, default: false },
  user: { type: Schema.Types.ObjectId, ref: "User" },
});

module.exports = model("Country", CountrySchema);
