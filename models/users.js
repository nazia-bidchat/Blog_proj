'use strict';
var bcrypt = require('bcrypt');
var sha1=require('sha1');
var jwt = require('jsonwebtoken');
var config = require('../config/config1');
var VerifyToken = require('../controllers/VerifyToken');

module.exports = (sequelize, DataTypes) => {
  var users = sequelize.define('user', {
    'id': {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
    fname: {
      type: DataTypes.STRING
},
    lastname:{
      type: DataTypes.STRING },
    password:{
      type: DataTypes.STRING}
  }, {
           freezeTableName: true,
           timestamps: false,
       },

{
  hooks:
  {
    afterCreate:function(user)
    {
      user.password= bcrypt.hashSync(user.password,8);
    }
  }
}
     );




  users.getName = function(req ,callback){
    //callback(null,true);
users.findOne({
        attributes:['fname'],
      },
    {
      where:
      {
        id:req.params['id'],
      }
    }).then(function(result){
        callback(null,result);
    })
    .catch(function(error){
      console.log("error",error);
      return callback({
          message:error.message
        });
    });
};


users.getAll=function(callback)
{
  users.findAll({
          attributes:['lastname'],
        }).then(function(result){
          callback(null,result);
      })
      .catch(function(error){
        console.log("error",error);
        return callback({
            message:error.message
          });
      });
};


users.enterUser=function(req,callback)
{
  users.create(
    {
      fname:req.body.fname,//"aaaa",
      lastname:req.body.lastname,//"defgh",
      //password:sha1(req.body.password),

      password:bcrypt.hashSync(req.body.password,8),
      id:req.params['id'],
      //console.log(password);
    //  console.log(fname);
    }).then(function(enter)
    {
    callback(null,enter);
  })  .catch(function(error){
      console.log("error",error);
      return callback({
          message:error.message
        });
      });

};

users.enterUser1=function(req,res)
{
  users.create(
    {
      fname:req.body.fname,//"aaaa",
      lastname:req.body.lastname,//"defgh",
      //password:sha1(req.body.password),

      password:bcrypt.hashSync(req.body.password,8),
      id:req.params['id'],
      //console.log(password);
    //  console.log(fname);
  }).then(function(user)
    {
      var token = jwt.sign({ id: user._id }, config.secret, {
    expiresIn: 86400 // expires in 24 hours
  });

  res.status(200).send({ auth: true, token: token });
  })  .catch(function(error){
      console.log("error",error);
     return res.status(500).send("There was a problem registering the user`.");

      });

};









users.update1=function(req,callback)
{

    users.update(
      {
        fname:req.body.fname,
        lastname:req.body.lastname,
        password:bcrypt.hashSync(req.body.password,8)
      },
      {
        where:
        {id:req.params.id}
      }
    ).then(function(enter)
    {
    callback(null,enter);
  })  .catch(function(error){
      console.log("error",error);
      return callback({
          message:error.message
        });
      });

};


users.login1=function(req,res)
{
// //   users.findOne(
// //     { where:
// //       {fname: req.body.fname  }}).then(function(req,user)
// //   {
// //     var passwordIsValid = bcrypt.compareSync(req.body.password, user.password);
// //        if(passwordIsValid)
// //        {
// //          var token = jwt.sign({ id: user._id }, config.secret, {
// //   expiresIn: 86400 // expires in 24 hours
// // });
// // }callback(null,user);}).catch(function(error){
// //   return callback({message:error.message});
// // });
// // };
//
//
//
users.findOne(
  {
    where:
  { fname: req.body.fname }}).then( function ( user) {
  // if (err) return res.status(500).send(user);
  // console.log("im in err");
  // if (!user) return  res.status(404).send('No user found.');
  // console.log("im in user");
  // check if the password is valid
    console.log(user.password);
  var pass =  bcrypt.hashSync(req.body.password,8);
  var passwordIsValid = bcrypt.compare(pass, user.password);
  if (!passwordIsValid)
  // console.log(req.body.password);
  //   console.log(passwordIsValid);

  return res.status(401).send({ auth: false, token: null });

  console.log("im in pass");


  // if user is found and password is valid
  // create a token
  var token = jwt.sign({ id: user._id }, config.secret, {
    expiresIn: 86400 // expires in 24 hours
  });
return   res.status(200).send({ auth: true, token: token });
 // return the information including token as JSON

}).catch(function(error){
    console.log("error",error);
    return res.status(500).send("user");
    // return callback({
    //     message:error.message
    //   });
    });


}


// users.verify(VerifyToken,function(req,res,next)
// {
//   users.findById(req.userId, { password: 0 }, function (err, user) {
//    if (err) return res.status(500).send("There was a problem finding the user.");
//    if (!user) return res.status(404).send("No user found.");
//    res.status(200).send(user);
// });
// });
  console.log("users : ",users);

  return users;
};
