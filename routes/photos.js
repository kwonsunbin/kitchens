const express = require('express');
const router = express.Router({ mergeParams: true });
const Photo = require('../models/Photo');
const authMiddleware = require('../middleware/authMiddleware');
const {
  deletePhoto,
  getPhoto,
  createPhoto,
  getPhotos,
} = require('../controllers/photos');
const upload = require('../utils/upload');
const advancedResults = require('../middleware/advancedResults');

router
  .route('/')
  .get(advancedResults(Photo), getPhotos)
  .post(authMiddleware, upload.array('files'), createPhoto);

router.route('/:id').delete(authMiddleware, deletePhoto).get(getPhoto);

module.exports = router;
