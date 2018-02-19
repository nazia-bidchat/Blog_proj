var models = require('../models');
module.exports = (sequelize, DataTypes) => {
  var blogimage = sequelize.define('blogimages', {
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
    'postId':
    {
      type: DataTypes.INTEGER,
      references: {
        model: "blogs",
        key: "blog_id"
      }
    }
  },
  {
    freezeTableName: true,
    timestamps: false,
  },);

  return blogimage;
};
