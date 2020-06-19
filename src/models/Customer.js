const { Schema, model } = require("mongoose");

const customerSchema = new Schema({
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
  createdBy: String,
  createdAt: { type: Date, default: new Date() },
  active: { type: Boolean, default: true },
  deleted: { type: Boolean, default: false },
  rents: [{ type: Schema.Types.ObjectId, ref: "Rent" }],
  moviesRents: [{ type: Schema.Types.ObjectId, ref: "Movie" }],
});

module.exports = model("Customer", customerSchema);
