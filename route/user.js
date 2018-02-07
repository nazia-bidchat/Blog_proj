var express 		= require('express');
var router 			= express.Router();
var app         = express();
var bodyParser = require('body-parser');
var jsonParser = bodyParser.json();

var UserController = require('../controllers/usercontroller');
//console.log('hi' + JSON.stringify(UserController.getname));
router.get('/user/:id', UserController.getName);
router.get('/user',UserController.getAll);
router.post('/user',UserController.enterUser);
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
