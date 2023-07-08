const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const EvacontSchema = new Schema({
  Id: String,
  Respuesta: String,
  Id_Evaluación: Number,
  Id_Cont_Evaluación: Number
});

const EvaluationAnswer = mongoose.model("EvaluationAnswer", EvacontSchema);
module.exports = EvaluationAnswer;
