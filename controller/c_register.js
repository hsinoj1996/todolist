const express = require("express");
const mongoose = require("mongoose");
const Register = require("../Model/register");

module.exports.getTest = (req, res) => {
  res.json({ msg: "register works" });
};

module.exports.getRegister = (req, res) => {
  console.log(req.body);

  const newRegister = new Register({
    username: req.body.username,
    email: req.body.email,
    password: req.body.password,
    confirm_password: req.body.confirm_password
  });
  console.log(newRegister);

  newRegister.save((err, c_register) => {
    if (err) {
      console.log(err);

      res.json({ err: err });
    } else {
      res.json(c_register);
    }
  });
};
