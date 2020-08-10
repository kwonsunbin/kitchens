const ErrorResponse = require('../utils/errorResponse');
const Request = require('../models/Request');
const asyncHandler = require('../middleware/async');

exports.getRequests = asyncHandler(async (req, res, next) => {
  res.status(200).json(res.advancedResults);
});

exports.getRequest = asyncHandler(async (req, res, next) => {
  const request = await Request.findById(req.params.id);

  if (!request) {
    return next(
      new ErrorResponse(
        `resource not found with the id of ${req.params.id}`,
        404
      )
    );
  }
  res.status(200).json({
    succes: true,
    data: request,
  });
});

exports.createRequest = asyncHandler(async (req, res, next) => {
  const request = await Request.create(req.body);

  if (!request) {
    res.status(400).json({ success: false, data: '' });
  }
  res.status(201).json({
    succes: true,
    data: request,
  });
});

exports.updateRequest = asyncHandler(async (req, res, next) => {
  const request = await Request.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
    runValidators: true,
  });
  if (!request) {
    return next(
      new ErrorResponse(
        `resource not found with the id of ${req.params.id}`,
        404
      )
    );
  }
  res.status(200).json({ success: true, data: request });
});

exports.deleteRequest = asyncHandler(async (req, res, next) => {
  const request = await Post.findById(req.params.id);

  if (!request) {
    return next(
      new ErrorResponse(
        `resource not found with the id of ${req.params.id}`,
        404
      )
    );
  }

  request.remove();
  res.status(200).json({ success: true, data: {} });
});
