const express = require('express');
const router = express.Router(); 
const NewsController = require('./../controllers/news.controller')


router.route('/').get(NewsController.getNews).post(NewsController.addNew); 



module.exports = router; 
