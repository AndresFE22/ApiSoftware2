const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const estcontSchema = new Schema({
  Id: Number,
  id_Estudiante: Number,
  id_Contenido: Number
});

const Enrollment = mongoose.model("Enrollment", estcontSchema);
module.exports = Enrollment;
