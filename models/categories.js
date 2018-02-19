var models = require('../models');


module.exports = function (sequelize, DataTypes) {
  var categories = sequelize.define('category', {
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

  },
    {
             freezeTableName: true,
             timestamps: true,
         },

);

categories.GetAllCategory=function(callback)
{
  categories.findAll({
    attributes:['cat_id','Title'],
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
categories.EnterCat=function(req,callback)
{
  categories.create(
    {
      Title:req.body.Title,
      Description:req.body.Description,
      cat_id:req.body.id,
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


  return categories;
};
