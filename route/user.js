var express 		= require('express');
var router 			= express.Router();
var app         = express();
var bodyParser = require('body-parser');
var jsonParser = bodyParser.json();
var VerifyToken = require('../controllers/VerifyToken');
var models = require('../models');
var auth = require('../controllers/Auth');
var UserController = require('../controllers/UserController');

router.get('/user/:id', UserController.GetUserName);
router.get('/user',UserController.GetAllUser);
router.post('/user',VerifyToken,auth,UserController.EnterUser);
router.put('/user/:id',UserController.UpdateUser);
router.post('/login',UserController.Login);

module.exports = router;
