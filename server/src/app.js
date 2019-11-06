const express = require("express");
const bodyParser = require("body-parser");
const routes = require("./routes");
const cors = require("cors");
const Tasks = require("./Tasks");

const app = express();

const tasks = new Tasks();

app.use(cors());
app.use(bodyParser.json());

app.use(function(req, res, next) {
  req.tasks = tasks;
  next();
});

app.use("/api/v1/", routes);


app.listen(3000, () => {
  console.log("App listening on port 3000!");
});

module.exports = app;