var express 		   = require('express');
var router			   = express.Router();
var authenticate       = require('../library/authenticate');
var categoryController = require('../controllers/categoryController');

router.get('/',categoryController.getAllCategories);
router.post('/',authenticate,categoryController.enterCategory);

module.exports = router;
