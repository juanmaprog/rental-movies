const { Schema, model } = require("mongoose");
const { schema } = require("./RentDetail");

const rentSchema = new Schema({
  date: { type: Date, default: Date.now },
  days: Number,
  ReturnedOn: Date,
  Payment: Number,
  OverduePayment: Number,
  Receipt: Date,
  ReceiptOverdue: Number,
  tag: String,
  createdBy: String,
  createdAt: { type: Date, default: new Date() },
  deleted:  { type: Boolean, default: false },
  customer: { type: Schema.Types.ObjectId, ref: "Customer" },
  details: [{ type: Schema.Types.ObjectId, ref: "RentDetail" }],
});

module.exports = model("Rent", rentSchema);
