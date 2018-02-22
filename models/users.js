'use strict';
var bcrypt = require('bcrypt');
var jwt = require('jsonwebtoken');
var config = require('../config/config1');

module.exports = (sequelize, DataTypes) => {

  var users = sequelize.define('users', {

    'id': {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true
    },
    'fname': {
      type: DataTypes.STRING
          },
    'lastname':{
      type: DataTypes.STRING 
          },
    'password':{
      type: DataTypes.STRING
          },
    'Token':{
      type:DataTypes.STRING
          }
      }, 
      {
        freezeTableName: true,
        timestamps: true,
      },
    );

    users.getUserName = function(req, callback)
    {
      var id=req.params.id;

      users.findAll(
      {
        attributes:['fname','lastname'],

        where: (id)? {id:parseInt(id)}:{},
        
      }).then(function(result){

        callback(null,result);

      })
      .catch(function(error){

        return callback(error,null);
      });
    };

    users.enterUser = function(req, callback)
    {
      users.create(
        {
          fname:req.body.fname,
          lastname:req.body.lastname,
          password:bcrypt.hashSync(req.body.password,8),
          id:req.params['id'],

        }).then(function(enter)
        {
          callback(null, enter);

        }).catch(function(error){

          return callback(error, null);
        });
    };

    users.updateUser = function(req, callback)
    {
      users.update(
        {
          fname: req.body.fname,
          lastname: req.body.lastname,
          password: bcrypt.hashSync(req.body.password, 8)
        },
        {
          where:
            { 
              id: req.params.id 
            }
        }
      ).then(function (enter) {

        callback(null, enter);

      }).catch(function (error) {

        return callback(error, null);
      });

    };

    users.login = function (req, res) 
    {
      users.findOne(
       {
        where:
          { 
            fname: req.body.fname 
          }
        }
      ).then(function (user){

        var pass = bcrypt.hashSync(req.body.password, 8);
        var passwordIsValid = bcrypt.compare(pass, user.password);
       
        if (!passwordIsValid)

          return res.status(401).send({ auth: false, token: null });

        var u_id = user.id;
        var token = jwt.sign({ id: user.id }, config.secret, {
          expiresIn: 86400 // expires in 24 hours
        });
        users.update(
          {
            Token: token
          },
          {
            where:
              { 
                id: u_id
               }
          }).then(function (enter) {

            console.log(enter);

          }).catch(function (error) {

            console.log(error);
          });
        return res.status(200).send({ success: true, token: token, id: user.id });
     
      }).catch(function (error) {

        return res.status(400).send("unable to update into database");
      });
    }

  return users;
};
