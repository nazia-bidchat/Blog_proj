var models = require('../models');
var category=function(){

};

category.getCat = function(req,res)
{
  console.log('In getname 1'+req.params.id);
var id=req.params.id;//return res.status(200).send("success");
 models.categoryyy.getCat(models,id,function(error,response)
{
  console.log('In getname 2'+req.params.id);
  if(error)
  {
    return res.status(409).send(response);
  }
  return res.status(200).send(response);
});
};

category.getAllCat=function(req,res)
{
    console.log('In getname 3');
  models.categoryyy.getAllCat (function(err,response)
  {  console.log('In getname 4');
    if(err)
    {
      return res.status(409).send(response);

    }
    return res.status(200).send(response);
  });
};


category.enterCat=function(req,res)
{
  console.log('In getname 5');
  console.log(req.body.query);
  models.categoryyy.enterCat(req,function(err,response)
  {  console.log('In getname 6');
  if(err)
  {
    return res.status(409).send(response);

  }
  return res.status(200).send(response);
});
};




module.exports=category;
