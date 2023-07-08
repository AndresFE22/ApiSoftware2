const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const tactcontSchema = new Schema({
  Id: String,
  Respuesta: String,
  Id_Actividad: Number,
  Id_Cont_actividad: Number
});

const Answer = mongoose.model("Answer", tactcontSchema);
module.exports = Answer;
