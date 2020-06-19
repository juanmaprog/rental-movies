const { Schema, model } = require("mongoose");

const companySchema = new Schema({
  name: String,
  type: Number,
  webSite: String,
  country: String,
  tag: String,
  createdBy: String,
  createdAt: { type: Date, default: new Date() },
  active: { type: Boolean, default: true },
  deleted:  { type: Boolean, default: false },
  movies: [{ type: Schema.Types.ObjectId, ref: "Movie" }],
});

module.exports = model("Company", companySchema);
