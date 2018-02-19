var express     = require('express');
var app         = express();
var routeUser=require('./route/user');
var routeCategory=require('./route/category');
var bodyParser = require('body-parser');
 var routePost=require('./route/blog');

app.use(bodyParser.json());
app.use('/',routeUser);
app.use('/category',routeCategory);
 app.use('/post',routePost);
app.listen(8080 , function() {
  console.log('Server running at 8080');
});
