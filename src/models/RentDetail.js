const { Schema, model } = require("mongoose");

const rentDetailSchema = new Schema({
  _id: String,
  days: Number,
  returnedOn: Date,
  price: Number,
  discount: Number,
  total: Number,
  tag: String,
  createdBy: String,
  createdAt: { type: Date, default: new Date() },
  deleted:  { type: Boolean, default: false },
  rent: { type: Schema.Types.ObjectId, ref: "Rent" },
});

module.exports = model("RentDetail", rentDetailSchema);
