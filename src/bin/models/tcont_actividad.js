const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ContentActivitySchema = new Schema({
  Id: Number,
  Descripción_contenidoActividad: Number,
  Respuesta_correcta: Number,
  Respuesta_incorrecta: Number
});

const ContentActivity = mongoose.model("ContentActivity", ContentActivitySchema);
module.exports = ContentActivity;
