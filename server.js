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
// app.post('/login', function(req, res) {
//     console.log("inside login");
//     models.user.find({
//       where:{
//         fname: req.body.fname
//       }
//     }).then(function (user1) {
//       if (!user1)
//         return res.status(404).send('No user found.');
//       else{
//
//         var pass=bcrypt.hashSync(req.body.password,8);
//         console.log(user1.password);
//         var passwordIsValid = bcrypt.compareSync(pass, user1.password);
//         console.log(user1.password);
//         console.log(pass);
//         console.log(passwordIsValid);
//       if (!passwordIsValid) return res.status(401).send({ auth: false, token: null });
//
//
//       var token = jwt.sign({ id: user1._id }, config.secret, {
//         expiresIn: 86400
//
//       });
//       res.status(200).send({ auth: true, token: token });
//
//       }
//     }).catch(function(err){
//       return res.status(500).send('Error on the server.');
//     });
//
//
// });
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
