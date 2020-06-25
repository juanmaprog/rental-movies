const { Schema, model } = require("mongoose");

const RentalDetailSchema = new Schema({
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
  rental: { type: Schema.Types.ObjectId, ref: "Rental" },
});

module.exports = model("RentalDetail", RentalDetailSchema);
