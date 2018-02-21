var express 		= require('express');
var router			= express.Router();
var postController  = require('../controllers/postController');
var authenticate    = require('../library/authenticate');

router.get('/?',postController.getAllPosts);
router.get('/:id',postController.getSinglePost);
router.get('/:id/images',postController.getPostImages);
router.post('/',authenticate,postController.enterPost);
router.get('/:id/images/:id',postController.getSingleImage);
router.delete('/:id/images/:id',authenticate,postController.deleteSingleImage);

module.exports = router;
