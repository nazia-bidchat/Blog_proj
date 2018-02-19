var express 		= require('express');
var router			= express.Router();
var verifyToken = require('../controllers/VerifyToken');
var models = require('../models');
var auth = require('../controllers/Auth');
var categoryController = require('../controllers/categoryController');

router.get('/',categoryController.getAllcategory);
router.post('/',verifyToken,auth,categoryController.enterCat);


module.exports = router;
