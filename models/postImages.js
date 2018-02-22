var models = require('../models');

module.exports = (sequelize, DataTypes) => {

  var postImages = sequelize.define('post_images', {

    'id': {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true
    },
    'url': {
      type: DataTypes.STRING,
    },
    'title':{
      type: DataTypes.STRING,
    },
    'postId':{
      type: DataTypes.INTEGER,
      references: {
        model: "posts",
        key: "id"
      }
    }
  },
  {
    freezeTableName: true,
    timestamps: true,
  },
);

 return postImages;
};
