var models = require('../models');

var categories=function(){
};

categories.getAllCategories=function(req,res)
{
  models.categories.getAllCategories (function(err,response)
  {
    if(err)
    {
      return res.status(400).send(err);
    }
    return res.status(200).send(response);
  });
};

categories.enterCategory=function(req,res)
{
  models.categories.enterCategory(req,function(err,response)
  {
    if(err)
    {
      return res.status(400).send(err);
    }
    return res.status(200).send(response);
  });
};

module.exports=categories;
