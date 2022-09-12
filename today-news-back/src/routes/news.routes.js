const express = require('express');
const router = express.Router(); 
const NewsController = require('./../controllers/news.controller');
const {uploadUserPhotoMiddleware} = require('./../middleware/upload-image.middleware'); 



router.route('/').get(NewsController.getNews).post(NewsController.addNew); 
router.route('/:id').delete(NewsController.deleteNew).put(NewsController.archiveNew); 

router.route('/add-image/:id').post( uploadUserPhotoMiddleware, NewsController.addPhotoToNew)

module.exports = router; 
