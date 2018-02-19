var models = require('../models');

var blog=function(){

};


blog.getSinglepost = function(req,res)
{

  var id=req.params.id;//return res.status(200).send("success");
  models.blogs.getSinglepost(models,id,function(error,response)
  {

    if(error)
    {
      return res.status(404).send(response);
    }
    return res.status(200).send(response);
  });
};


blog.getAllblog = function(req,res)
{

  models.blogs.getAllblog(models,req,function(error,response)
  {

    if(error)
    {
      return res.status(404).send(response);
    }
    return res.status(200).send(response);
  });
};

blog.getPostimages = function(req,res)
{

  var id=req.params.id;
  models.blogs.getPostimages(models,id,function(error,response)
  {

    if(error)
    {
      return res.status(404).send(response);
    }
    return res.status(200).send(response);
  });
};

blog.getSingleimage = function(req,res)
{

  var id=req.params.id;
  models.blogs.getSingleimage(models,id,function(error,response)
  {

    if(error)
    {
      return res.status(404).send(response);
    }
    return res.status(200).send(response);
  });
};
blog.deleteSingleimage = function(req,res)
{

  var id=req.params.id;
  models.blogs.deleteSingleimage(models,id,function(error,response)
  {

    if(error)
    {
      return res.status(500).send(response);
    }
    return res.status(200).send(response);
  });
};



blog.enterPost=function(req,res)
{


  models.blogs.enterPost(req,function(err,response)
  {
  if(err)
  {
    return res.status(500).send(response);

  }
  return res.status(200).send(response);
});
};
module.exports=blog;
