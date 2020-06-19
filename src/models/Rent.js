const { Schema, model } = require("mongoose");

const rentSchema = new Schema({
  Location: String,
  Days: Number,
  ReturnedOn: Date,
  Payment: Number,
  OverduePayment: Number,
  Receipt: Date,
  ReceiptOverdue: Number,
  tag: String,
  createdBy: String,
  createdAt: Date,
  deleted: Boolean,
});

module.exports = model("Rent", rentSchema);
