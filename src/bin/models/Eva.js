const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const EvaluationSchema = new Schema({
  id: Number,
  Nombre: String,
  Fecha: Date,
  idtevaluacion: Number
});

const Eva = mongoose.model("Evaluation", EvaluationSchema);
module.exports = Eva;
