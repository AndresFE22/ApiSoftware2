const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const acttSchema = new Schema({
  Id: Number,
  Nombre: String
});

const AssignmentType = mongoose.model("AssignmentType", acttSchema);
module.exports = AssignmentType;
