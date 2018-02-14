var express 		= require('express');
var router 			= express.Router();
var app         = express();
var bodyParser = require('body-parser');
var jsonParser = bodyParser.json();
var VerifyToken = require('../controllers/VerifyToken');
var models = require('../models');
var auth = require('../controllers/auth');

var UserController = require('../controllers/usercontroller');
//console.log('hi' + JSON.stringify(UserController.getname));
router.get('/user/:id', UserController.getName);
router.get('/user',UserController.getAll);
router.post('/user',VerifyToken,auth,UserController.enterUser);
router.post('/user1',UserController.enterUser1);
router.put('/user/:id',UserController.update1);
router.post('/login',UserController.login1);
// router.get('/:id',UserController.verify);
router.get('/mee', VerifyToken,auth);
router.get('/me', VerifyToken, function(req, res, next) {
console.log(req.userId);
  models.user.findById(req.userId, { password: 0 }).then( function (user) {

    return res.status(200).send(user);
  // next(user);
}).catch(function(error)
{
   return res.status(500).send("There was a problem finding the user.");
 // return res.status(404).send("No user found.");
})

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
