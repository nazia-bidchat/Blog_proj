// var models = require('../models');
// var userlog=require('../models/users');
// var bcrypt = require('bcrypt');
// var Userlogin=function(){
//
// };
//  Userlogin.user_login = function(req,res)
//  {
// //   console.log('In getname 1'+req.params.id);
// //var id=req.params.id;//return res.status(200).send("success");
// userlog.user_login=function(req,res)
// {
// userlog.findOne({ fname: req.body.fnmae }, function (err, user) {
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
// }
// return Userlogin;
// };
//
// // {
// //   console.log('In getname 2'+req.params.id);
// //   if(error)
// //   {
// //     return res.status(409).send(response);
// //   }
// //   return res.status(200).send(response);
// // });
