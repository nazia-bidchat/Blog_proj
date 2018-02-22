var models = require('../models');

var post = function(){
};

post.getSinglePost = function(req,res)
{
  var id = req.params.id;
  models.posts.getSinglePost(models, req, function(error, response)
  {
    if(error)
    {
      return res.status(400).send(error);
    }
    return res.status(200).send(response);
  });
};

post.getAllPosts = function(req, res)
{
  models.posts.getAllPosts(models, req, function(error, response)
  {
    if(error)
    {
      return res.status(400).send(error);
    }
    return res.status(200).send(response);
  });
};

post.getPostImages = function(req, res)
{
  var id = req.params.id;
  models.posts.getPostImages(models, id, function(error, response)
  {
    if(error)
    {
      return res.status(400).send(error);
    }
    return res.status(200).send(response);
  });
};

post.getSingleImage = function(req, res)
{
  var id = req.params.id;
  models.posts.getSingleImage(models, id, function(error, response)
  {
    if(error)
    {
      return res.status(400).send(error);
    }
    return res.status(200).send(response);
  });
};

post.deleteSingleImage = function(req,res)
{
  var id = req.params.id;
  models.posts.deleteSingleImage(models, id, function(error, response)
  {
    if(error)
    {
      return res.status(400).send(error);
    }
    return res.status(204).send(response);
  });
};

post.enterPost = function(req, res)
{
  models.posts.enterPost(req,function(err, response)
  {
    if(err)
    {
      return res.status(400).send(err);
    }
    return res.status(201).send(response);
  });
};

module.exports = post;
