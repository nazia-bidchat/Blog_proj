var models = require('../models');

var blog=function(){

};


blog.GetSinglePost = function(req,res)
{

  var id=req.params.id;//return res.status(200).send("success");
  models.blogs.GetSinglePost(models,id,function(error,response)
  {

    if(error)
    {
      return res.status(404).send(response);
    }
    return res.status(200).send(response);
  });
};


blog.GetAllblog = function(req,res)
{

  models.blogs.GetAllblog(models,req,function(error,response)
  {

    if(error)
    {
      return res.status(404).send(response);
    }
    return res.status(200).send(response);
  });
};

blog.GetPostImg = function(req,res)
{

  var id=req.params.id;
  models.blogs.GetPostImg(models,id,function(error,response)
  {

    if(error)
    {
      return res.status(404).send(response);
    }
    return res.status(200).send(response);
  });
};

blog.GetSingleImage = function(req,res)
{

  var id=req.params.id;
  models.blogs.GetSingleImage(models,id,function(error,response)
  {

    if(error)
    {
      return res.status(404).send(response);
    }
    return res.status(200).send(response);
  });
};
blog.DeleteSingleImage = function(req,res)
{

  var id=req.params.id;
  models.blogs.GetSingleImage(models,id,function(error,response)
  {

    if(error)
    {
      return res.status(500).send(response);
    }
    return res.status(200).send(response);
  });
};



blog.EnterPost=function(req,res)
{


  models.blogs.EnterPost(req,function(err,response)
  {
  if(err)
  {
    return res.status(500).send(response);

  }
  return res.status(200).send(response);
});
};
module.exports=blog;
