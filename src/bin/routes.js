const express = require("express");
const app = express();
const { player } = require("./Player");
const bodyParser = require("body-parser");

app.use(bodyParser.json());

//Pagina principal
app.get("/", function(req, res) {
  res.send("Proyecto funcionando");
});

//Traer todos los usuarios
app.get("/users", function(req, res) {
  player.getUsers(res);
});

//Agregar un usuario
app.post("/users", function(req, res) {
  let { users } = req.body;
  console.log(req.body);
  player.setUsers(users, res);
});

//Traer un usuario por su id
app.get("/users/:id", function(req, res) {
  let { id } = req.params;
  player.getUser(id, res);
});


// acualizar usuario por Id
app.put("/users/:id", function(req, res){
  let users = req.body.users;
  users.id = req.params.id;
  player.updateUser(users, res);
});

//Eliminar un Usuario por su id
app.delete("/users/:id", function(req, res){
  let { id } = req.params;
   req.params.id;
  player.deleteUser(id, res);
});

//traer los contenidos
app.get("/content", function(req, res) {
  player.getcontent(res)
});
//Agregarr un contenido
app.post("/content", function(req, res) {
  let { cont } = req.body;
  console.log(req.body);
  player.setcontent(cont, res);
});

//Traer un contenido por su id
app.get("/content/:id", function(req, res) {
  let { id } = req.params;
  player.getcontent(id, res);
});

// acualizar contenido por Id
app.put("/content/:id", function(req, res){
  let cont = req.body.cont;
  cont.id = req.params.id;
  player.updatecontent(cont, res);
});

//Eliminar un contenido por su id
app.delete("/content/:id", function(req, res){
  let { id } = req.params;
   req.params.id;
  player.deletecontent(id, res);
});

//traer las actividades
app.get("/activity", function(req, res) {
  player.getactivity(res)
});
//Agregarr una actividad
app.post("/activity", function(req, res) {
  let { act } = req.body;
  console.log(req.body);
  player.setactivity(act, res);
});

//Traer una actividad por su id
app.get("/activity/:id", function(req, res) {
  let { id } = req.params;
  player.getactivity(id, res);
});

// acualizar actividad por Id
app.put("/activity/:id", function(req, res){
  let act = req.body.act;
  act.id = req.params.id;
  player.updateactivity(act, res);
});

//Eliminar actividad por su id
app.delete("/activity/:id", function(req, res){
  let { id } = req.params;
   req.params.id;
  player.deleteactivity(id, res);
});


//traer las evaluaciones
app.get("/evaluation", function(req, res) {
  player.getevaluation(res)
});
//Agregarr un contenido
app.post("/evaluation", function(req, res) {
  let { eva } = req.body;
  console.log(req.body);
  player.setevaluation(eva, res);
});

//Traer un contenido por su id
app.get("/evaluation/:id", function(req, res) {
  let { id } = req.params;
  player.getevaluation(id, res);
});

// acualizar contenido por Id
app.put("/evaluation/:id", function(req, res){
  let eva = req.body.eva;
  eva.id = req.params.id;
  player.updateevaluation(eva, res);
});

//Eliminar un contenido por su id
app.delete("/evaluation/:id", function(req, res){
  let { id } = req.params;
   req.params.id;
  player.deleteevaluation(id, res);
});

exports.app = app;
