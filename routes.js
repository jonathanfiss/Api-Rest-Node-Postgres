const express = require("express");
const routes = express.Router();

const UsersController = require('./app/controllers/UsersController');


routes.get("/users", UsersController.listAll);//lista todos
routes.post("/users", UsersController.create);//criar
routes.get('/users/:id', UsersController.findById);//buscar
routes.post('/users/email/', UsersController.findByEmail);//buscar por email
routes.put('/users/:id', UsersController.update);//editar
routes.delete('/users/:id', UsersController.destroy);//deletar

  module.exports = routes;