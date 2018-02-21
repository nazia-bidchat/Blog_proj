var models = require('../models');

module.exports = function (sequelize, DataTypes){

  var categories = sequelize.define('categories', {

    'id': {
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
       timestamps: false,
  },
  );

  categories.getAllCategories = function(callback)
  {
    categories.findAll(
      {
        attributes:['id','Title'],

    }).then(function(result){

      callback(null,result);

    })
    .catch(function(error){

      return callback(error,null);
    });
  };

  categories.enterCategory = function(req, callback)
  {
    categories.create(
      {
        Title:req.body.Title,
        Description:req.body.Description,
      id:req.body.id,
      }).then(function(enter)
      {
        callback(null,enter);

      }).catch(function(error){

        return callback(error,null);
      });
    };

  return categories;
};
