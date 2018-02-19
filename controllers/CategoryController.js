var models = require('../models');
var categories=function(){

};
categories.getAllcategory=function(req,res)
{
  models.category.getAllcategory (function(err,response)
  {
    if(err)
    {
      return res.status(404).send(response);
    }
    return res.status(200).send(response);
  });
};


categories.enterCat=function(req,res)
{
  models.category.enterCat(req,function(err,response)
  {
    if(err)
    {
      return res.status(500).send(response);

    }
    return res.status(200).send(response);
  });
};

module.exports=categories;
