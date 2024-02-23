// IMPORTING EXPRESS FROM NODE_MODS

const express = require("express");
// USING ROUTER FUNCTIONALITIES FROM EXPRESS 
const hats = express.Router()

hats.get("/", (req, res) => {
    res.send("Welcome to noggin' cover");
  });

  module.exports = hats;