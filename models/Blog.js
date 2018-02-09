var models = require('../models');


module.exports = (sequelize, DataTypes) => {
  var blog = sequelize.define('blogg2', {
    'blog_id': {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
    'title': {
      type: DataTypes.STRING
},
    category_id:{
      type: DataTypes.INTEGER,
      references: {
 model: "categoryyys",
 key: "cat_id"
} },
  'User_id':{
      type: DataTypes.INTEGER,
      references: {
 model: "user",
 key: "id"
}
}
//   content:{
//     type: DataTypes.STRING },
//     image_id:{
//       type: DataTypes.STRING,
//       references: {
//  model: "blog_image",
//  key: "img_id"
// }
// }},
},
     // {
     //       freezeTableName: true,
     //       timestamps: false,
     //   },


     );
     // blog.belongsTo(models.user, {foreignKey: 'user_id'});
     // blog.belongsTo(models.categoryyy, {foreignKey: 'category_id'});
     // blog.belongsTo(models.blog_image, {foreignKey: 'image_id'});

     // blog.getAllblog = function(model_ref,details ,callback){
     //   //callback(null,true);
     //  blog.belongsTo(model_ref.user, {foreignKey: 'User_id'});
     //
     // blog.findAll({
     //       attributes:['Title'],
     //
     //                          include:[
     //                            {
     //                              model:model_ref.user,
     //                              required:true,
     //                              attributes:['fname','lastname']
     //                            }
     //                          ]
     //
     //     }).then(function(result){
     //       callback(null,result);
     //   })
     //   .catch(function(error){
     //     console.log("error",error);
     //     return callback({
     //         message:error.message
     //       });
     //   });
     // };
     //
     //
     // blog.getAllblog1 = function(model_ref,details ,callback){
     //   //callback(null,true);
     //  blog.belongsTo(model_ref.categoryyys, {foreignKey: 'category_id'});
     //
     // blog.findAll({
     //       attributes:['Title'],
     //
     //                          include:[
     //                            {
     //                              model:model_ref.categoryyys,
     //                              required:true,
     //                              attributes:['title']
     //                            }
     //                          ]
     //
     //     }).then(function(result){
     //       callback(null,result);
     //   })
     //   .catch(function(error){
     //     console.log("error",error);
     //     return callback({
     //         message:error.message
     //       });
     //   });
     // };
     //
     //





     blog.enterBlog=function(req,callback)
     {
       blog.create(
         {
           id:req.body.id,//"aaaa",
           title:req.body.title,//"defgh",
           category_id:req.body.category_id,
           user_id:req.body.user_id,
           content:req.body.content,
           image_id:req.body.image_id,
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




return blog;
   };
