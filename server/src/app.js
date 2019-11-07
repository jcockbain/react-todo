const express = require("express");
const bodyParser = require("body-parser");
const routes = require("./routes");
const cors = require("cors");
const Tasks = require("./Tasks");

const middleware = require("./middleware");

const app = express();

const tasks = new Tasks([]);

app.use(cors());
app.use(bodyParser.json());

app.use(function(req, res, next) {
  req.tasks = tasks;
  next();
});

app.use("/api/v1/", routes);

app.use(middleware.errorHandler.handleErrors);

app.listen(3000, () => {
  console.log("App listening on port 3000!");
});

module.exports = app;
