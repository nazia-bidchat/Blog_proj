'use strict';
var bcrypt = require('bcrypt');
var sha1=require('sha1');
var jwt = require('jsonwebtoken');
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




  users.getName = function(details ,callback){
    //callback(null,true);
users.findAll({
        attributes:['fname'],
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


users.login1=function(req,callback)
{
  users.findOne(
    { where:
      {fname: req.body.fname  }}).then(function(req,user)
  {
    var passwordIsValid = bcrypt.compareSync(req.body.password, user.password);
       if(passwordIsValid)
       {
         var token = jwt.sign({ id: user._id }, config.secret, {
  expiresIn: 86400 // expires in 24 hours
});
}callback(null,user);}).catch(function(error){
  return callback({message:error.message});
});
};





  console.log("users : ",users);

  return users;
};
