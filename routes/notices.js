const express = require('express');
const authMiddleware = require('../middleware/authMiddleware');

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
  .post(authMiddleware, createNotice);

router
  .route('/:id')
  .get(getNotice)
  .put(updateNotice)
  .delete(authMiddleware, deleteNotice);

module.exports = router;
