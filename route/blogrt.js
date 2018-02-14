var express 		= require('express');
var router4 			= express.Router();
var app         = express();
var bodyParser = require('body-parser');
var jsonParser = bodyParser.json();
var blogimgController = require('../controllers/blogimgController');
router4.get('/blog/:id',blogimgController.getImgName);
router4.post('/',blogimgController.enterImg);

 module.exports = router4;
