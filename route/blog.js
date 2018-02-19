var express 		= require('express');
var router			= express.Router();
var app         = express();
var bodyParser = require('body-parser');
var jsonParser = bodyParser.json();
var blogController = require('../controllers/BlogController');
var VerifyToken = require('../controllers/VerifyToken');
var models = require('../models');
var auth = require('../controllers/Auth');
router.get('/?',blogController.GetAllblog);
router.get('/:id',blogController.GetSinglePost);
router.get('/:id/images',blogController.GetPostImg);
router.post('/',VerifyToken,auth,blogController.EnterPost);
router.get('/:id/images/:id',VerifyToken,auth,blogController.GetSingleImage);
router.delete('/:id/images/:id',VerifyToken,auth,blogController.DeleteSingleImage);

module.exports = router;
