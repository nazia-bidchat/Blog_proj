'use strict';
var bcrypt = require('bcrypt');
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

  console.log("users : ",users);

  return users;
};
