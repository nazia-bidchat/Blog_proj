var express 		= require('express');
var router 			= express.Router();
var authenticate = require('../library/authenticate');
var userController = require('../controllers/userController');

router.get('/user/:id', userController.getUserName);
router.get('/user',userController.getAllUsers);
router.post('/user',userController.enterUser);
router.put('/user/:id',authenticate,userController.updateUser);
router.post('/login',userController.login);

module.exports = router;
