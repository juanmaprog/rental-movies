const { Schema, model } = require("mongoose");

const rentDetailSchema = new Schema({
  days: Number,
  returnedOn: Date,
  location: String,
  payment: Number,
  overduePayment: Number,
  receipt: Date,
  receiptOverdue: Number,
  tag: String,
  createdBy: String,
  createdAt: { type: Date, default: new Date() },
  deleted:  { type: Boolean, default: false },
  rent: { type: Schema.Types.ObjectId, ref: "Rent" },
});

module.exports = model("RentDetail", rentDetailSchema);
