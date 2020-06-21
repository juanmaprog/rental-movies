const { Schema, model } = require("mongoose");

const companyTypeSchema = new Schema({
  _id: String,
  name: String,
  createdBy: String,
  createdAt: { type: Date, default: new Date() },
  active: { type: Boolean, default: true },
  deleted:  { type: Boolean, default: false },
});

module.exports = model("CompanyType", companyTypeSchema);
