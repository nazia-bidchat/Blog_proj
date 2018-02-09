var models = require('../models');


module.exports = function (sequelize, DataTypes) {
  var categoryy = sequelize.define('categoryyy', {
    'cat_id': {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true
    },
    'Title': {
      type: DataTypes.STRING
    },
    'Description': {
      type: DataTypes.STRING
    },
    'User_id':
    {  type: DataTypes.INTEGER,
      references: {
        model: "user",
        key: "id"
      }
    }
  },

);


categoryy.getCat = function(model_ref,details ,callback){
  //callback(null,true);
  categoryy.belongsTo(model_ref.user, {foreignKey: 'User_id'});

  categoryy.findAll({
    attributes:['Title'],

    include:[
      {
        model:model_ref.user,
        required:true,
        attributes:['fname','lastname']
      }
    ]

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


categoryy.getAllCat=function(callback)
{
  categoryy.findAll({
    attributes:['Description'],
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
categoryy.enterCat=function(req,callback)
{
  categoryy.create(
    {
      Title:req.body.Title,
      Description:req.body.Description,
      cat_id:req.body.id,
      User_id:req.body.u_id,
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

  console.log("im in category table");
  return categoryy;
};
