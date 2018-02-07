var models = require('../models');
var category=function(){

};

category.getCat = function(req,res)
{
  console.log('In getname 1'+req.params.id);
var id=req.params.id;//return res.status(200).send("success");
 models.category.getCat(id,function(error,response)
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
  models.category.getAllCat (function(err,response)
  {  console.log('In getname 4');
    if(err)
    {
      return res.status(409).send(response);

    }
    return res.status(200).send(response);
  });
};

module.exports=category;
