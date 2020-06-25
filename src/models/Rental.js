const { Schema, model } = require("mongoose");

const RentalSchema = new Schema({
  _id: String,
  date: { type: Date, default: Date.now },
  payment: Number,
  tag: String,
  createdBy: String,
  createdAt: { type: Date, default: new Date() },
  deleted: { type: Boolean, default: false },
  user: { type: Schema.Types.ObjectId, ref: "User" },
  receipt: { type: Schema.Types.ObjectId, ref: "Receipt" },
  receiptOverdue: { type: Schema.Types.ObjectId, ref: "Receipt" },
  customer: { type: Schema.Types.ObjectId, ref: "Customer" },
  rentalDetails: [{ type: Schema.Types.ObjectId, ref: "RentalDetail" }],
});

module.exports = model("Rental", RentalSchema);
