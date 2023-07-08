var mongoose = require("mongoose");
class Database {
  constructor() {}

  async connect() {
    try {
      await mongoose.connect(
        //"mongodb+srv://fraedma:fema27@cluster0-qvdtc.mongodb.net/myMusic?retryWrites=true&w=majority",
        "mongodb+srv://arteagaramos:1003002157Andres22@cluster0.imtdmts.mongodb.net/Cluster0?retryWrites=true&w=majority",   
        //"mongodb://localhost:27017/my_music_collection_db",
        { useNewUrlParser: true }
      );
      console.log("Connected databases.");
    } catch (e) {
      console.error(e);
    }
  }
}

exports.database = new Database();