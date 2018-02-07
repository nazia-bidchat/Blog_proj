var express 		= require('express');
var router1 			= express.Router();

var CategoryController = require('../controllers/CatController');
//console.log('hi' + JSON.stringify(UserController.getname));
router1.get('/cat/:id', CategoryController.getCat);
router1.get('/',CategoryController.getAllCat);
//router1.post('/',CategoryController.enterCat);
// router.get('/user', function(req,res)
// {
//   console.log('connected');
//   res.send('hi hello');
// });

module.exports = router1;
