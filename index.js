const express = require("express");
const mongoose = require("mongoose");

const wilderControllers = require("./controllers/wilder");

mongoose
  .connect("mongodb://127.0.0.1:27017/wilderdb", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    autoIndex: true,
  })
  .then(() => console.log("Connected to database."))
  .catch((err) => console.error(err));

const server = express().use(express.json());

server.get("/", (req, res) => {
  res.send("Hello over HTTP");
});

server.post("/api/wilders", wilderControllers.create);
server.get("/api/wilders", wilderControllers.get);
server.put("/api/wilders/:id", wilderControllers.update);

server.listen(3000, () => {
  console.log("Server listening on port 3000.");
});
