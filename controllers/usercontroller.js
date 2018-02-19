var models = require('../models');
var VerifyToken = require('../controllers/VerifyToken');
var users=function(){
};

users.getUsername = function(req,res)
{var id=req.params.id;
  models.user.getUsername(req,function(error,response)
  {
    if(error)
    {
      return res.status(404).send(response);
    }
    return res.status(200).send(response);
  });
};

users.getAlluser=function(req,res)
{  models.user.getAlluser (function(err,response)
  {
    if(err)
    {
      return res.status(404).send(response);

    }
    return res.status(200).send(response);
  });
};

users.enterUser=function(req,res)
{
  models.user.enterUser(req,function(err,response)
  {
    if(err)
    {
      return res.status(500).send(response);

    }
    return res.status(200).send(response);
  });
};
users.updateUser=function(req,res)
{
  models.user.updateUser(req,function(err,response)
  {
    if(err)
    {return res.status(500).send(response);}
    return res.status(200).send(response);
  });
};

users.login=function(req,res)
{
  console.log(req.query);
  models.user.login(req,res);

}


module.exports=users;
