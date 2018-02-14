var models = require('../models');
var VerifyToken = require('../controllers/VerifyToken');
var blog=function(){

};


blog.getImgName=function(req,res)
{
  console.log(req.params);
  models.blog_image.getImgName (req,function(err,response)
  {  console.log('In getname 4');
  if(err)
  {
    return res.status(409).send(response);

  }
  return res.status(200).send(response);
});
};

blog.enterImg=function(req,res)
{

  console.log(req.params);
  models.blog_image.enterImg(req,function(err,response)
  {  console.log('In getname 6');
  if(err)
  {
    return res.status(409).send(response);

  }
  return res.status(200).send(response);
});
};

module.exports=blog;
