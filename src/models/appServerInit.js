const { Schema, model } = require("mongoose");

const AppServerInitSchema = new Schema({
  _id: String,
  applied: { type: Boolean, default: false },
});

module.exports = model("AppServerInit", AppServerInitSchema);
