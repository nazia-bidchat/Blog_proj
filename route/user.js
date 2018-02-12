var express 		= require('express');
var router 			= express.Router();
var app         = express();
var bodyParser = require('body-parser');
var jsonParser = bodyParser.json();
var VerifyToken = require('../controllers/VerifyToken');
var models = require('../models');
var UserController = require('../controllers/usercontroller');
//console.log('hi' + JSON.stringify(UserController.getname));
router.get('/user/:id', UserController.getName);
router.get('/user',UserController.getAll);
router.post('/user',UserController.enterUser);
router.post('/user1',UserController.enterUser1);
router.put('/user/:id',UserController.update1);
router.post('/login',UserController.login1);
// router.get('/:id',UserController.verify);

router.get('/me', VerifyToken, function(req, res, next) {
console.log(req.userId);
  models.user.findById(req.userId, { password: 0 }, function (err, user) {
    if (err) return res.status(500).send("There was a problem finding the user.");
    if (!user) return res.status(404).send("No user found.");
     res.status(200).send(user);
  //  next(user);
  });

});

router.post('/caaat',  function(req, res)
{
  console.log(req);
});
// router.get('/user', function(req,res)
// {
//   console.log('connected');
//   res.send('hi hello');
// });

module.exports = router;
