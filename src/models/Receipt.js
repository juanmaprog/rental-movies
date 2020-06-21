const { Schema, model } = require("mongoose");

const receiptSchema = new Schema({
  _id: String,
  date: { type: Date, default: new Date() },
  type: Number,
  payment: Number,
  discount: { type: Number, default: 0 },
  closed: { type: Boolean, default: false },
  tag: String,
  createdBy: String,
  createdAt: { type: Date, default: new Date() },
  active: { type: Boolean, default: true },
  deleted: { type: Boolean, default: false },
  customer: { type: Schema.Types.ObjectId, ref: "Customer" },
});

module.exports = model("Receipt", receiptSchema);
