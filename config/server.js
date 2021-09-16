var express = require('express');
var bodyParser = require('body-parser');
var expressValidator = require('express-validator');
var consign = require('consign');
const { urlencoded } = require('body-parser');

var app = express();

app.set('view engine', 'ejs');
app.set('views', './application/views');

app.use(express.static('./application/public'));
app.use(bodyParser.urlencoded({extended:true}));
app.use(expressValidator());

consign()
    .include('./application/routes')
    .then('./application/controllers')
    .then('./application/models')
    .into(app);

module.exports = app;
    