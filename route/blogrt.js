var express 		= require('express');
var router4 			= express.Router();
var app         = express();
var bodyParser = require('body-parser');
var jsonParser = bodyParser.json();
//
var blogController = require('../controllers/blogController');
// //console.log('hi' + JSON.stringify(UserController.getname));
//
router4.get('/',blogController.getAllblog);
// router4.post('/',blogController.enterBlog);
//
//
//
 module.exports = router4;
