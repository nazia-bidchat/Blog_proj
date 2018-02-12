var models = require('../models');

var blog=function(){

};


blog.getAllblog = function(req,res)
{
  console.log('In getname 1'+req.params.id);
  var id=req.params.id;//return res.status(200).send("success");
  models.blogg.getAllblog(models,id,function(error,response)
  {
    console.log('In getname 2'+req.params.id);
    if(error)
    {
      return res.status(409).send(response);
    }
    return res.status(200).send(response);
  });
};


blog.getAllblog1 = function(req,res)
{
  console.log('In getname 1'+req.params.id);
  var id=req.params.id;//return res.status(200).send("success");
  models.blogg.getAllblog1(models,id,function(error,response)
  {
    console.log('In getname 2'+req.params.id);
    if(error)
    {
      return res.status(409).send(response);
    }
    return res.status(200).send(response);
  });
};



blog.enterBlog=function(req,res)
{
  console.log('In getname 5');
  console.log(req.body.query);
  models.blogg.enterblog(req,function(err,response)
  {  console.log('In getname 6');
  if(err)
  {
    return res.status(409).send(response);

  }
  return res.status(200).send(response);
});
};
module.exports=blog;
