const express = require("express");
const { User } = require("./../models");

module.exports = {
  //lista tudo
  async listAll(req, res) {
    const users = await User.findAll();
    return res.json(users);
  },
  //Criação
  async create(req, res) {
    const user = await User.create(req.body);
    return res.json(user);
  },
  //busca por id
  async findById(req, res) {
    const user = await User.findByPk(req.params.id);
    return res.json(user);
  },
   //busca por email
   async findByEmail(req, res) {
    const user = await User.findOne({where:req.body});
    return res.json(user); 
  },
  //Atualização
  async update(req, res) {
    const user = await User.update(req.body, { where: { id: req.params.id } });

    return res.json(user);
  },

  async destroy(req, res) {
    const user = await User.destroy({ where: { id: req.params.id } });

    return res.json(user);
  }
};
