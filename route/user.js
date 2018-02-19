var express 		= require('express');
var router 			= express.Router();
var verifyToken = require('../controllers/verifyToken');
var models = require('../models');
var auth = require('../controllers/auth');
var userController = require('../controllers/userController');

router.get('/user/:id', userController.getUsername);
router.get('/user',userController.getAlluser);
router.post('/user',verifyToken,auth,userController.enterUser);
router.put('/user/:id',verifyToken,auth,userController.updateUser);
router.post('/login',userController.login);

module.exports = router;
