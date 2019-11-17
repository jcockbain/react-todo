require('dotenv').config();

const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const routes = require('./routes');
const Tasks = require('./Tasks');

const port = process.env.PORT || 5000;

const middleware = require('./middleware');

const app = express();

const tasks = new Tasks([]);

app.use(cors());
app.use(bodyParser.json());

app.use((req, res, next) => {
  req.tasks = tasks;
  next();
});

app.use('/api/v1/', routes);

app.use(middleware.errorHandler.handleErrors);

app.listen(port, () => {
  console.log(`App listening on port ${port}!`);
});

module.exports = app;
