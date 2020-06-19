const { Schema, model } = require("mongoose");

const customerSchema = new Schema({
  createdBy: String,
  createdAt: Date,
  tag: String,
  MiddleName: String,
  Gender: Number,
  FirstName: String,
  LastName: String,
  Birthday: Date,
  Email: String,
  Photo: String,
  Address: String,
  DiscountLevel: Number,
  Phone: String,
  Comments: String,
  active: String,
  deleted: Boolean
});

module.exports = model("Customer", customerSchema);
