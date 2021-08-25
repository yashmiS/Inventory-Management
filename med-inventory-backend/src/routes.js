const express = require("express");
//const userModel = require("./models");
const app = express();

app.get("/", async (request, response) => {
  try {
    response.send({
      message: "Healthline API is online",
    });
  } catch (error) {
    response.status(500).send(error);
  }
});

module.exports = app;
