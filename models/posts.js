var models = require('../models');


module.exports = (sequelize, DataTypes) => {
  var post = sequelize.define('posts', {
    'id': {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true
    },
    'title': {
      type: DataTypes.STRING
    },
    'categoryId':{
      type: DataTypes.INTEGER,
      references: {
        model: "categories",
        key: "id"
      } },
      'userId':{
        type: DataTypes.INTEGER,
        references: {
          model: "users",
          key: "id"
        }
      },
      'content':{
        type: DataTypes.STRING },
      },

      {
        freezeTableName: true,
        timestamps: true,
      },
  );


    post.getSinglePost = function(model_ref,id ,callback)
    {
      post.belongsTo(model_ref.users, {foreignKey: 'userId'});
      post.belongsTo(model_ref.categories, {foreignKey: 'categoryId'});
      post.hasMany(model_ref.postImages, {foreignKey: 'postId'});
      post.findOne({
        attributes:['title','id','content'],
        include: [
          {
            model: model_ref.users,
            required : true,
            attributes:['fname','lastname']
          },
          {
            model: model_ref.categories,
            required : true,
            attributes:['Title']
          },
          {
            model: model_ref.postImages,
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
        return callback(error,null);
      });
    };

    post.getPostImages = function(model_ref,id ,callback)
    {
      post.belongsTo(model_ref.users, {foreignKey: 'userId'});
      post.belongsTo(model_ref.categories, {foreignKey: 'categoryId'});
      post.hasMany(model_ref.postImages, {foreignKey: 'postId'});
      post.findAll({
        attributes:['title','id','content'],
        include: [

          {
            model: model_ref.postImages,
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
        return callback(error,null);
      });
    };

    post.getSingleImage = function(model_ref,id ,callback)
    {
      post.belongsTo(model_ref.users, {foreignKey: 'userId'});
      post.belongsTo(model_ref.categories, {foreignKey: 'categoryId'});
      post.hasMany(model_ref.postImages, {foreignKey: 'postId'});
      post.findOne({
        include: [
          {
            model: model_ref.postImages,
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
        return callback(error,null);
      });
    };

    post.deleteSingleImage = function(model_ref,id ,callback){

      post.belongsTo(model_ref.users, {foreignKey: 'userId'});
      post.belongsTo(model_ref.categories, {foreignKey: 'categoryId'});
      post.hasMany(model_ref.postImages, {foreignKey: 'postId'});
      post.destroy({
        include: [
          {
            model: model_ref.postImages,
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
        return callback(error,null);
      });
    };

    post.enterPost=function(req,callback)
    {
      post.create(
        {
          id:req.body.id,
          title:req.body.title,
          categoryId:req.body.categoryId,
          userId:req.body.userId,
          content:req.body.content,
        }).then(function(enter)
        {
          callback(null,enter);
        })  .catch(function(error){
          return callback(error,null);
        });
      };

      post.getAllPosts=function(model_ref,req,callback)
      {

        post.belongsTo(model_ref.user, {foreignKey: 'userId'});
        post.belongsTo(model_ref.category, {foreignKey: 'categoryId'});
        post.hasMany(model_ref.postImages, {foreignKey: 'postId'});
        var limit =parseInt( req.query.limit);
        var offset=parseInt( req.query.offset);
        post.findAll(
          {
            attributes:['title','content'],

            include: [
              {
                model: model_ref.users,
                required : true,
                attributes:['fname','lastname']
              },
              {
                model: model_ref.categories,
                required : true,
                attributes:['Title']
              },
              {
                model: model_ref.postImages,
                required : false,
                attributes:['title','url'],
              } ],
              limit: limit,
              offset:offset
            }).then(function(result){
              callback(null,result);
            })
            .catch(function(error){
              return callback(error,null);
            });
          };
          return post;
        };
