const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ContSchema = new Schema({
  id: Number,
  Titulo: String,
  Descripcion: String
});

const cont = mongoose.model("cont", ContSchema);
module.exports = cont;