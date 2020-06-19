const { Schema, model } = require("mongoose");

const companySchema = new Schema({
  name: String,
  type: Number,
  webSite: String,
  country: String,
  tag: String,
  createdBy: String,
  createdAt: Date,
  active: Boolean,
  deleted: Boolean,
});

module.exports = model("Company", companySchema);
