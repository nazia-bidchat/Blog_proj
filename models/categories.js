var models = require('../models');


module.exports = function (sequelize, DataTypes) {
    var categoryy = sequelize.define('category', {
        'cat_id': {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        'Title': {
            type: DataTypes.INTEGER
        },
        'Description': {
            type: DataTypes.STRING
        }
      },
        // {
        //          freezeTableName: true,
        //          timestamps: false
        //      }
           );


             categoryy.getCat = function(details ,callback){
               //callback(null,true);
             categoryy.findAll({
                   attributes:['Title'],
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
             categoryy.enterUser=function(req,callback)
             {
               users.create(
                 {
                   Title:"def",//req.params['fname'],
                   Description:req.params['Description'],
                   cat_id:req.params['cat_id'],
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
