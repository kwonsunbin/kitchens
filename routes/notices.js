const express = require('express');
const authMiddleware = require('../middleware/authMiddleware');
const upload = require('../utils/upload');

const {
  getNotice,
  getNotices,
  createNotice,
  updateNotice,
  deleteNotice,
} = require('../controllers/notices');
const router = express.Router({ mergeParams: true });

const Notice = require('../models/Notice');
const advancedResults = require('../middleware/advancedResults');

router
  .route('/')
  .get(advancedResults(Notice), getNotices)
  .post(authMiddleware, upload.single('file'), createNotice);

router
  .route('/:id')
  .get(getNotice)
  .put(authMiddleware, upload.single('file'), updateNotice)
  .delete(authMiddleware, deleteNotice);

module.exports = router;
