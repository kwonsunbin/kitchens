const express = require('express');
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

router.route('/').get(advancedResults(Notice), getNotices).post(createNotice);

router.route('/:id').get(getNotice).put(updateNotice).delete(deleteNotice);

module.exports = router;
