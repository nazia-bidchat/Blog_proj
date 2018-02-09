var models = require('../models');

var Users=function(){

};

Users.getName = function(req,res)
{
  console.log('In getname 1'+req.params.id);
  var id=req.params.id;//return res.status(200).send("success");
  models.user.getName(id,function(error,response)
  {
    console.log('In getname 2'+req.params.id);
    if(error)
    {
      return res.status(409).send(response);
    }
    return res.status(200).send(response);
  });
};

Users.getAll=function(req,res)
{
  console.log('In getname 3');
  models.user.getAll (function(err,response)
  {  console.log('In getname 4');
  if(err)
  {
    return res.status(409).send(response);

  }
  return res.status(200).send(response);
});
};

Users.enterUser=function(req,res)
{
  console.log('In getname 5');
  console.log(req.body.query);
  models.user.enterUser(req,function(err,response)
  {  console.log('In getname 6');
  if(err)
  {
    return res.status(409).send(response);

  }
  return res.status(200).send(response);
});
};
Users.update1=function(req,res)
{
  models.user.update1(req,function(err,response)
  {
    if(err)
    {return res.status(409).send(response);}
    return res.status(200).send(response);
  });
};

Users.login1=function(req,res)
{
  models.user.login1(req,function(err,response)
  {
    if(err)
    {return res.status(409).send(response);}
    return res.status(200).send(response);
  });
};

module.exports=Users;
