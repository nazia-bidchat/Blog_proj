var models = require('../models');
var VerifyToken = require('../controllers/VerifyToken');
var Users=function(){
      };

Users.GetUserName = function(req,res)
{var id=req.params.id;
  models.user.GetUserName(req,function(error,response)
  {
    if(error)
    {
      return res.status(404).send(response);
    }
    return res.status(200).send(response);
  });
};

Users.GetAllUser=function(req,res)
{  models.user.GetAllUser (function(err,response)
  {
  if(err)
  {
    return res.status(404).send(response);

  }
  return res.status(200).send(response);
});
};

Users.EnterUser=function(req,res)
{
  models.user.EnterUser(req,function(err,response)
  {
  if(err)
  {
    return res.status(500).send(response);

  }
  return res.status(200).send(response);
});
};
Users.UpdateUser=function(req,res)
{
  models.user.UpdateUser(req,function(err,response)
  {
    if(err)
    {return res.status(500).send(response);}
    return res.status(200).send(response);
  });
};

 Users.Login=function(req,res)
 {
models.user.Login(req,res);

}
Users.verify=function(req,res)
{
Users.VerifyToken;
Users.get=function(req,res)
{
users.findById(req.userId, { password: 0 }, function (err, user) {
 if (err) return res.status(500).send("There was a problem finding the user.");
 if (!user) return res.status(404).send("No user found.");
 res.status(200).send(user);
});
}
}

Users.enterUser1=function(req,res)
{
  models.user.enterUser1(req,res);
}
module.exports=Users;
