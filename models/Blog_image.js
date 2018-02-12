var models = require('../models');


module.exports = (sequelize, DataTypes) => {
  var blogimg = sequelize.define('blog_image', {
    'img_id': {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
    url: {
      type: DataTypes.STRING,
},
   title:{
      type: DataTypes.STRING,
      }
    },
    {
           freezeTableName: true,
           timestamps: false,
       },


     );
return blogimg;
   };
