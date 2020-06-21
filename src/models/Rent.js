const { Schema, model } = require("mongoose");
const { schema } = require("./RentDetail");

const rentSchema = new Schema({
  _id: String,
  date: { type: Date, default: Date.now },
  // days: Number,
  // returnedOn: Date,
  payment: Number,
  // overduePayment: Number,
  tag: String,
  createdBy: String,
  createdAt: { type: Date, default: new Date() },
  deleted: { type: Boolean, default: false },
  receipt: { type: Schema.Types.ObjectId, ref: "Receipt" },
  receiptOverdue: { type: Schema.Types.ObjectId, ref: "Receipt" },
  customer: { type: Schema.Types.ObjectId, ref: "Customer" },
  details: [{ type: Schema.Types.ObjectId, ref: "RentDetail" }],
});

module.exports = model("Rent", rentSchema);
