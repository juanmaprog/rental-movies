const { Schema, model } = require("mongoose");
const bcrypt = require("bcryptjs");


const UserSchema = new Schema({
  _id: String,
  name: { type: String, required: true },
  email: { type: String, unique: true, required: true },
  password: { type: String, required: true },
  createdBy: String,
  createdAt: { type: Date, default: new Date() },
  active: { type: Boolean, default: true },
  deleted: { type: Boolean, default: false },
});

UserSchema.methods.encryptPassword = async password => {
  const salt = await bcrypt.genSalt(10);
  return await bcrypt.hash(password, salt);
};

UserSchema.methods.matchPassword = async function(password) {
  return await bcrypt.compare(password, this.password);
};

module.exports = model("User", UserSchema);
