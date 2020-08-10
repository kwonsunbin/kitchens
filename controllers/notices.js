const ErrorResponse = require('../utils/errorResponse');
const Notice = require('../models/Notice');
const asyncHandler = require('../middleware/async');

exports.getNotices = asyncHandler(async (req, res, next) => {
  res.status(200).json(res.advancedResults);
});

exports.getNotice = asyncHandler(async (req, res, next) => {
  const notice = await Notice.findById(req.params.id);

  if (!notice) {
    return next(
      new ErrorResponse(
        `resource not found with the id of ${req.params.id}`,
        404
      )
    );
  }
  res.status(200).json({
    success: true,
    data: notice,
  });
});

exports.createNotice = asyncHandler(async (req, res, next) => {
  const notice = await Notice.create(req.body);

  res.status(201).json({
    success: true,
    data: notice,
  });
});

exports.updateNotice = asyncHandler(async (req, res, next) => {
  const notice = await Notice.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
    runValidators: true,
  });
  if (!notice) {
    return next(
      new ErrorResponse(
        `resource not found with the id of ${req.params.id}`,
        404
      )
    );
  }
  res.status(200).json({ success: true, data: notice });
});

exports.deleteNotice = asyncHandler(async (req, res, next) => {
  const notice = await Notice.findByIdAndDelete(req.params.id);

  if (!notice) {
    return next(
      new ErrorResponse(
        `resource not found with the id of ${req.params.id}`,
        404
      )
    );
  }
  res.status(200).json({ success: true, data: {} });
});
