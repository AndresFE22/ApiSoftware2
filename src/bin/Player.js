const { database } = require("./Database");
const Users = require("./models/Users");
const taca = require("./models/tactividad_contactividad");
const Act = require("./models/act");
const tcact = require("./models/tcont_actividad");
const tcev = require("./models/tcont_evaluacion");
const Cont = require("./models/cont");
const testco = require("./models/testudiante_contenido");
const tevcev = require("./models/tevaluacion_contevaluacion");
const Eva = require("./models/Eva");
const tta = require("./models/ttipo_actividad");
const tte = require("./models/ttipo_evaluacion");


class Player {
  constructor() {
    database.connect();
  }

  //Traer todos los usuarios
  getUsers(res) {
    Users.find({}, (err, users) => {
      res.send({ status: 200, users: users });
    });
  }

  //Agregar un usuario
  setUsers(users, res) {
    Users.create(users, function(err, newUsers) {
      if (err) throw err;
      res.send({ status: 200 });
    });
  }

  //Traer un usuario por su id
  getUser(id, res) {
    Users.find({ _id: id }, (err, user) => {
      res.send({ status: 200, user: user });
    });
  }
//actializar por id
  updateUser(users,res){
    let { id, name, genero, grado } = users;
    Users.updateOne( 
       { _id: id },
       { $set: { name: name, genero: genero, grado: grado } }
    )
    .then(rawResponse => {
      res.send({ message: "User update", raw: rawResponse})
    })
    .catch( err => {
      if (err) throw err;
    });
  }
//eliminar por id
deleteUser(id, res){
  Users.deleteOne({ _id: id }, function(err){
    if (err) throw err;
    res.send({ message: "Usuario ha sido Borrado"});
  });
}

//Traer los contenidos
getcontent(res) {
  Cont.find({}, (err, cont) => {
    res.send({ status: 200, cont: cont });
  });
}

//Agregar un contenido
setcontent(cont, res) {
  Cont.create(cont, function(err, newUsers) {
    if (err) throw err;
    res.send({ status: 200 });
  });
}

  //Traer un contenido por su id
  getcontent(id, res) {
    Cont.find({ _id: id }, (err, cont) => {
      res.send({ status: 200, cont: cont });
    });
  }

//actualizar contenido por id
updatecontent(cont,res){
  let { id, Titulo, Descripcion } = cont;
  Cont.updateOne( 
     { _id: id },
     { $set: { Id: id, Titulo: Titulo, Descripcion: Descripcion } }
  )
  .then(rawResponse => {
    res.send({ message: "content update", raw: rawResponse})
  })
  .catch( err => {
    if (err) throw err;
  });
}

//eliminar contenido por id
deletecontent(id, res){
  Cont.deleteOne({ _id: id }, function(err){
    if (err) throw err;
    res.send({ message: "Contenido Borrado"});
  });
}

//Traer actividades
getactivity (res) {
  Act.find({}, (err, act) => {
    res.send({ status: 200, act: act });
  });
}

//Agregar una actividad
setactivity (act, res) {
  Act.create(act, function(err, newUsers) {
    if (err) throw err;
    res.send({ status: 200 });
  });
}

//Agregar una actividad por id
getactivity(id, res) {
  Act.find({ _id: id }, (err, act) => {
    res.send({ status: 200, act: act });
  });
}

//actializar por id
updateactivity (act, res){
  let { id, Nombre, Fecha, idtact } = act;
  Act.updateOne( 
     { _id: id },
     { $set: { Id: id, Nombre: Nombre, Fecha: Fecha, idtact: idtact} }
  )
  .then(rawResponse => {
    res.send({ message: "User update", raw: rawResponse})
  })
  .catch( err => {
    if (err) throw err;
  });
}

//eliminar actividad por id
deleteactivity(id, res){
  Act.deleteOne({ _id: id }, function(err){
    if (err) throw err;
    res.send({ message: "actividad Borrada"});
  });
}

//Traer evaluaciones
getevaluation (res) {
  Eva.find({}, (err, act) => {
    res.send({ status: 200, act: act });
  });
}

//Agregar una evaluacion
setevaluation (eva, res) {
  Eva.create(eva, function(err, newUsers) {
    if (err) throw err;
    res.send({ status: 200 });
  });
}

//Agregar una evaluacion por id
getevaluation(id, res) {
  Eva.find({ _id: id }, (err, eva) => {
    res.send({ status: 200, eva: eva });
  });
}

//actializar por id
updateevaluation (eva, res){
  let { id, Nombre, Fecha, idtevaluacion } = eva;
  Eva.updateOne( 
     { _id: id },
     { $set: { id: id, Nombre: Nombre, Fecha: Fecha, idtevaluacion: idtevaluacion} }
  )
  .then(rawResponse => {
    res.send({ message: "User update", raw: rawResponse})
  })
  .catch( err => {
    if (err) throw err;
  });
}

//eliminar evaluacion por id
deleteevaluation (id, res){
  Eva.deleteOne({ _id: id }, function(err){
    if (err) throw err;
    res.send({ message: "evaluacion Borrada"});
  });
}


}



exports.player = new Player();
