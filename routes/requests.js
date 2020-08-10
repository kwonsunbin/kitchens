const express = require('express');
const {
  getRequests,
  getRequest,
  createRequest,
  updateRequest,
  deleteRequest,
} = require('../controllers/requests');

const Request = require('../models/Request');
const advancedResults = require('../middleware/advancedResults');

const router = express.Router();

router
  .route('/')
  .get(advancedResults(Request), getRequests)
  .post(createRequest);

router.route('/:id').get(getRequest).put(updateRequest).delete(deleteRequest);

module.exports = router;
