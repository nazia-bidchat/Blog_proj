var models = require('../models');


module.exports = (sequelize, DataTypes) => {
  var blog = sequelize.define('blogs', {
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
        model: "category",
        key: "cat_id"
      } },
      'User_id':{
        type: DataTypes.INTEGER,
        references: {
          model: "user",
          key: "id"
        }
      },
      content:{
        type: DataTypes.STRING },
      },

      {
        freezeTableName: true,
        timestamps: true,
      },
  );


    blog.getSinglepost = function(model_ref,id ,callback)
    {
      blog.belongsTo(model_ref.user, {foreignKey: 'User_id'});
      blog.belongsTo(model_ref.category, {foreignKey: 'category_id'});
      blog.hasMany(model_ref.blogimages, {foreignKey: 'postId'});
      blog.findOne({
        attributes:['title','blog_id','content'],
        include: [
          {
            model: model_ref.user,
            required : true,
            attributes:['fname','lastname']
          },
          {
            model: model_ref.category,
            required : true,
            attributes:['Title']
          },
          {
            model: model_ref.blogimages,
            required : true,
            attributes:['title','url'],

            where:
            {
              postId:parseInt(id),
            }
          }],
        } ).then(function(result){
        callback(null,result);
      }).catch(function(error){
        console.log("error",error);
        return callback({
          message:error.message
        });
      });
    };

    blog.getPostimages = function(model_ref,id ,callback)
    {
      blog.belongsTo(model_ref.user, {foreignKey: 'User_id'});
      blog.belongsTo(model_ref.category, {foreignKey: 'category_id'});
      blog.hasMany(model_ref.blogimages, {foreignKey: 'postId'});
      blog.findAll({
        attributes:['title','blog_id','content'],
        include: [

          {
            model: model_ref.blogimages,
            required : true,
            attributes:['title','url'],

            where:
            {
              postId:parseInt(id),
            }
            }],
          } ).then(function(result){
        callback(null,result);
      }).catch(function(error){

        return callback({
          message:error.message
        });
      });
    };

    blog.getSingleimage = function(model_ref,id ,callback)
    {
      blog.belongsTo(model_ref.user, {foreignKey: 'User_id'});
      blog.belongsTo(model_ref.category, {foreignKey: 'category_id'});
      blog.hasMany(model_ref.blogimages, {foreignKey: 'postId'});
      blog.findOne({
        include: [
          {
            model: model_ref.blogimages,
            required : true,
            attributes:['title','url'],

            where:
            {
              id:parseInt(id),
            }
          }],
          } ).then(function(result){
        callback(null,result);
      }).catch(function(error){

        return callback({
          message:error.message
        });
      });
    };

    blog.deleteSingleimage = function(model_ref,id ,callback){

      blog.belongsTo(model_ref.user, {foreignKey: 'User_id'});
      blog.belongsTo(model_ref.category, {foreignKey: 'category_id'});
      blog.hasMany(model_ref.blogimages, {foreignKey: 'postId'});
      blog.destroy({
        include: [
          {
            model: model_ref.blogimages,
            required : true,
            attributes:['title','url'],

            where:
            {
              id:parseInt(id),
            }
          }
        ],
      } ).then(function(result){
        callback(null,result);
      }).catch(function(error){

        return callback({
          message:error.message
        });
      });
    };

    blog.enterPost=function(req,callback)
    {
      blog.create(
        {
          id:req.body.id,
          title:req.body.title,
          category_id:req.body.category_id,
          User_id:req.body.User_id,
          content:req.body.content,
        }).then(function(enter)
        {
          callback(null,enter);
        })  .catch(function(error){

          return callback({
            message:error.message
          });
        });
      };

      blog.getAllblog=function(model_ref,req,callback)
      {

        blog.belongsTo(model_ref.user, {foreignKey: 'User_id'});
        blog.belongsTo(model_ref.category, {foreignKey: 'category_id'});
        blog.hasMany(model_ref.blogimages, {foreignKey: 'postId'});
        var limit =parseInt( req.query.limit);
        var offset=parseInt( req.query.offset);
        blog.findAll(
          {
            attributes:['title','content'],

            include: [
              {
                model: model_ref.user,
                required : true,
                attributes:['fname','lastname']
              },
              {
                model: model_ref.category,
                required : true,
                attributes:['Title']
              },
              {
                model: model_ref.blogimages,
                required : false,
                attributes:['title','url'],
              } ],
              limit: limit,
              offset:offset
            }).then(function(result){
              callback(null,result);
            })
            .catch(function(error){

              return callback({
                message:error.message
              });
            });
          };
          return blog;
        };
