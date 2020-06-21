const { Schema, model } = require("mongoose");

const companySchema = new Schema({
  _id: String,
  name: String,
  webSite: String,
  tag: String,
  createdBy: String,
  createdAt: { type: Date, default: new Date() },
  active: { type: Boolean, default: true },
  deleted: { type: Boolean, default: false },
  type: { type: Schema.Types.ObjectId, ref: "CompanyType" },
  country: { type: Schema.Types.ObjectId, ref: "Country" },
  movies: [{ type: Schema.Types.ObjectId, ref: "Movie" }],
});

module.exports = model("Company", companySchema);
