var express 		= require('express');
var router			= express.Router();
var blogController = require('../controllers/blogController');
var verifyToken = require('../controllers/VerifyToken');
var models = require('../models');
var auth = require('../controllers/Auth');
router.get('/?',blogController.getAllblog);
router.get('/:id',blogController.getSinglepost);
router.get('/:id/images',blogController.getPostimages);
router.post('/',verifyToken,auth,blogController.enterPost);
router.get('/:id/images/:id',blogController.getSingleimage);
router.delete('/:id/images/:id',verifyToken,auth,blogController.deleteSingleimage);

module.exports = router;
