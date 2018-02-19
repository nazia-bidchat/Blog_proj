var express 		= require('express');
var router			= express.Router();
var VerifyToken = require('../controllers/VerifyToken');
var models = require('../models');
var auth = require('../controllers/Auth');
var CategoryController = require('../controllers/CategoryController');


router.get('/',CategoryController.GetAllCategory);
router.post('/',VerifyToken,auth,CategoryController.EnterCat);


module.exports = router;
