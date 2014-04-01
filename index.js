var React = require('react'),
    express = require('express');

require('node-jsx').install();


var Home = require('./app/home.jsx');


var app = express();


app.get('/', function (req, res) {
  var string = React.renderComponentToString(Home());
  res.send(string);
});


app.listen(3000);
