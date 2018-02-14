var http = require('http');
var express     = require('express');
var app         = express();
var routee=require('./route/user');
var route2=require('./route/category');
var bodyParser = require('body-parser');
var bcrypt = require('bcrypt');
var models=require('./models');
var jwt = require('jsonwebtoken');

var config = require('./config/config1');
var route4=require('./route/blogrt');
//var route5=require('./route/user');

app.use(bodyParser.json());
app.use('/',routee);

app.post('/ccc', function(req, res)
{
  console.log(req.body);
    var b=bcrypt.hashSync(req.body.password,8)
  console.log(b);
});
app.use('/cat',route2);
app.use('/blog',route4);
app.listen(8080 , function() {
  console.log('Server running at 8080');
});
