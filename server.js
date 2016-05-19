var express = require ('express');

var yeah = require('../routers/yeah');

var app = express();

app.use('/', yeah);

app.listen(8000, function () {
  console.log('scaredd listening on port 8000');
};
