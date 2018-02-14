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
      type: DataTypes.STRING},
      Token:{
        type:DataTypes.STRING
      }
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
      fname:req.body.fname,
      lastname:req.body.lastname,


      password:bcrypt.hashSync(req.body.password,8),
      id:req.params['id'],

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
      fname:req.body.fname,
      lastname:req.body.lastname,


      password:bcrypt.hashSync(req.body.password,8),
      id:req.params['id'],

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
{  console.log(req.body);

users.findOne(
  {

    where:
  { fname: req.body.fname }}).then( function ( user) {

  var pass =  bcrypt.hashSync(req.body.password,8);
  var passwordIsValid = bcrypt.compare(pass, user.password);
  if (!passwordIsValid)


  return res.status(401).send({ auth: false, token: null });

  console.log("im in pass");

var u_id=user.id;

  var token = jwt.sign({ id: user.id }, config.secret, {
    expiresIn: 86400 // expires in 24 hours
  });

  var decode=jwt.decode(token,config.secret);
  console.log(decode);
  users.update(
    {
      Token:token
    },
    {
      where:
      {id:u_id}
    }).then(function(enter)
    {
    console.log('result');
  })  .catch(function(error){
      console.log("error",error);

      });
return   res.status(200).send({ success: true, token: token });
 // return the information including token as JSON

}).catch(function(error){
    console.log("error",error);
    return res.status(500).send("user");

    });


}





  return users;
};
