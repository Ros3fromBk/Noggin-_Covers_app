// app.js
const express = require("express");
const cors = require("cors");

const app = express();

const hatsController = require("./Controllers/hatsController");

// // Middleware
app.use(cors());
app.use(express.json());

// ROUTES
app.use("/hats", hatsController);

app.get("/", (req, res) => {
  res.send("Hello");
});

// 404 Route Handler
app.get("*", (req, res, next) => {
  res.status(404).send("Sorry, the page you are looking for does not exist.");
});

module.exports = app;
