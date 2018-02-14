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

     blogimg.enterImg=function(req,callback)
     {
       blogimg.create(
         {
           url:req.body.url,
           title:req.body.title,

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

     blogimg.getImgName = function(req ,callback){
       console.log(req.params);
   blogimg.findOne({
           attributes:['url'],
         },
       {
         where:
         {
           img_id:req.params['id'],
         }
       }).then(function(result){
           callback(null,result);
       }).catch(function(error){
         console.log("error",error);
         return callback({
             message:error.message
           });
       });
   };


return blogimg;
   };
