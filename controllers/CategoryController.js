var models = require('../models');
var categories=function(){

};
categories.GetAllCategory=function(req,res)
{

  models.category.GetAllCategory (function(err,response)
  {
    if(err)
    {
      return res.status(404).send(response);

    }
    return res.status(200).send(response);
  });
};


categories.EnterCat=function(req,res)
{
  models.category.EnterCat(req,function(err,response)
  {
  if(err)
  {
    return res.status(500).send(response);

  }
  return res.status(200).send(response);
});
};

module.exports=categories;