var http = require('http');
var express     = require('express');
var app         = express();
var routee=require('./route/user');
var route2=require('./route/category');
var bodyParser = require('body-parser');
var bcrypt = require('bcrypt');

//create a server object:
//the server object listens on port 8080
app.use(bodyParser.json());
app.use('/',routee);
// app.post('/ccc', function(req, res)
// {
//   console.log(req.body);
//     var b=bcrypt.hashSync(req.body.password,8)
//   console.log(b);
// });
app.use('/cat',route2);
app.listen(8080 , function() {
  console.log('Server running at 8080');
});
