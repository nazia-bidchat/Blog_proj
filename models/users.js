'use strict';
var bcrypt = require('bcrypt');
var jwt = require('jsonwebtoken');
var config = require('../config/config1');
var verifyToken = require('../controllers/verifyToken');

module.exports = (sequelize, DataTypes) => {
  var users = sequelize.define('user', {
    'id': {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true
    },
    'fname': {
      type: DataTypes.STRING
    },
    'lastname':{
      type: DataTypes.STRING },
      'password':{
        type: DataTypes.STRING},
        'Token':{
          type:DataTypes.STRING
        }
      }, {
        freezeTableName: true,
        timestamps: false,
      },


    );


    users.getUsername = function(req ,callback){

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


    users.getAlluser=function(callback)
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



      users.updateUser=function(req,callback)
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

          return callback({
            message:error.message
          });
        });

      };


      users.login=function(req,res)
      {

        users.findOne(
          {

            where:
            { fname: req.body.fname }}).then( function ( user) {

              var pass =  bcrypt.hashSync(req.body.password,8);
              var passwordIsValid = bcrypt.compare(pass, user.password);
              if (!passwordIsValid)


              return res.status(401).send({ auth: false, token: null });



              var u_id=user.id;

              var token = jwt.sign({ id: user.id }, config.secret, {
                expiresIn: 86400 // expires in 24 hours
              });



              users.update(
                {
                  Token:token
                },
                {
                  where:
                  {id:u_id}
                }).then(function(enter)
                {

                })  .catch(function(error){
                  console.log("error",error);

                });
                return   res.status(200).send({ success: true, token: token, id: user.id });


              }).catch(function(error){
                console.log("error",error);
                return res.status(500).send("unable to update into database");

              });


            }





            return users;
          };
