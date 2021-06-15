const mongoose = require("mongoose");

const datos = new mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  titulo: { type: String },
  desc: { type: String },
  uno: { type: String },
  dos: { type: String },
  tres: { type: String },
  cuatro: { type: String },
});

module.exports = mongoose.model("datos", datos);
