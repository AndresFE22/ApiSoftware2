const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const evatSchema = new Schema({
  Id: Number,
  Nombre: String
});

const TaskType = mongoose.model("TaskType", evatSchema);
module.exports = TaskType;
