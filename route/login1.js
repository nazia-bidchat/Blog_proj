// var express 		= require('express');
// var router3 			= express.Router();
// var app         = express();
// var bodyParser = require('body-parser');
// var jsonParser = bodyParser.json();
// var User=require('../models/users');
// //var loginController = require('../controllers/loginController');
//
//
// router3.post('/', function(req, res) {
//
//   User.findOne({ fname: req.body.fname }, function (err, user) {
//     if (err) return res.status(500).send('Error on the server.');
//     if (!user) return res.status(404).send('No user found.');
//
//     // check if the password is valid
//     var passwordIsValid = bcrypt.compareSync(req.body.password, user.password);
//     if (!passwordIsValid) return res.status(401).send({ auth: false, token: null });
//
//     // if user is found and password is valid
//     // create a token
//     var token = jwt.sign({ id: user._id }, config.secret, {
//       expiresIn: 86400 // expires in 24 hours
//     });
//
//     // return the information including token as JSON
//     res.status(200).send({ auth: true, token: token });
//   });
//
// });
// module.export=router3;
