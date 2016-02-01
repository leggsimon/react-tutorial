var express = require('express');
var app = new express();

app.get('/', function (req, res) {
  res.render('./../app/index.ejs', {});
});

app.listen(3000, function () {
  console.log('Server listening on port 3000');
});
