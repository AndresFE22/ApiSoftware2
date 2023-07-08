const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ContentEvaluationSchema = new Schema({
  Id: Number,
  Descripción_contEvaluación: Number,
  Respuesta_correcta: Number,
  Respuesta_incorrecta: Number
});

const ContentEvaluation = mongoose.model("ContentEvaluation", ContentEvaluationSchema);
module.exports = ContentEvaluation;
