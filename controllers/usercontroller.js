var models = require('../models');
var VerifyToken = require('../controllers/VerifyToken');
var Users=function(){

};

Users.getName = function(req,res)
{
  console.log('In getname 1'+req.params.id);
  var id=req.params.id;//return res.status(200).send("success");
  models.user.getName(req,function(error,response)
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
models.user.login1(req,res);
  // {
  //
  // }
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
//     // if(error)
//     // {return res.status(500).send('Error on the server.');}
//     // return res.status(200).send("response");
//   //   res.status(200).send('hhh');
//   //
//   //   if(error!=null)
//   //   {
//   //     if(error=='err')
//   //   return  res.status(500).send('Error on the server.');
//   //   else if (error=='user') {
//   //   return  res.status(404).send('No user found.');
//   //   }
//   //   else {
//   //   return  res.status(401).send({ auth: false, token: null });
//   //   }
//   //     // return res.status(409).send(response);
//   //   }
//   // return  res.status(200).send({ auth: true, token: token });
//     // return res.status(200).send(response);
//
//     models.user.findOne(
//       {
//         where:
//       { model:models.user,
//         fname: req.body.fname }}, function (err, user1) {
//       if (err) return res.status(500).send('Error on the server.');
//       console.log("im in err");
//       if (!user1) return  res.status(404).send('No user found.');
//       console.log("im in user");
//       // check if the password is valid
//       var passwordIsValid = bcrypt.compareSync(req.body.password, user.password);
//       if (!passwordIsValid) return res.status(401).send({ auth: false, token: null });
//
//       console.log("im in pass");
//
//
//       // if user is found and password is valid
//       // create a token
//       var token = jwt.sign({ id: user._id }, config.secret, {
//         expiresIn: 86400 // expires in 24 hours
//       });
//     return   res.status(200).send({ auth: true, token: token });
//      // return the information including token as JSON
//
//     });
//
//
//   };
// };
Users.enterUser1=function(req,res)
{
  models.user.enterUser1(req,res);
}
module.exports=Users;
