var models = require('../models');

var users = function(){
};

users.getUserName = function(req, res)
{
  var id = req.params.id;
  models.users.getUserName(req, function(error, response)
  {
    if(error)
    {
      return res.status(400).send(error);
    }
    return res.status(200).send(response);
  });
};

users.getAllUsers = function(req,res)
{  
  models.users.getAllUsers(function(err,response)
  {
    if(err)
    {
      return res.status(400).send(err);
    }
    return res.status(200).send(response);
  });
};

users.enterUser = function(req,res)
{
  models.users.enterUser(req, function(err, response)
  {
    if(err)
    {
      return res.status(400).send(err);
    }
    return res.status(200).send(response);
  });
};
users.updateUser = function(req,res)
{
  models.users.updateUser(req, function(err, response)
  {
    if(err)
    {
      return res.status(400).send(err);
    }
    return res.status(200).send(response);
  });
};

users.login = function(req, res)
{
  models.users.login(req, res);
}

module.exports=users;
