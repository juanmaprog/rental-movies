const { Schema, model } = require("mongoose");

const customerSchema = new Schema({
  _id: String,
  tag: String,
  middleName: String,
  gender: Number,
  firstName: String,
  lastName: String,
  birthday: Date,
  email: String,
  // photo: String,
  address: String,
  discountLevel: Number,
  phone: String,
  comments: String,
  createdBy: String,
  createdAt: { type: Date, default: new Date() },
  active: { type: Boolean, default: true },
  deleted: { type: Boolean, default: false },
  user: { type: Schema.Types.ObjectId, ref: "User" },
  rents: [{ type: Schema.Types.ObjectId, ref: "Rent" }],
  moviesRents: [{ type: Schema.Types.ObjectId, ref: "Movie" }],
});

module.exports = model("Customer", customerSchema);
