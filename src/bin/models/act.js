const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ActSchema = new Schema({
  Id: Number,
  Nombre: String,
  Fecha: Date,
  idtactividad: Number
});

const Activity = mongoose.model("Activity", ActSchema);
module.exports = Activity;
