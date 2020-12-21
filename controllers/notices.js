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
  if (req.file) {
    var obj = {
      title: req.body.title,
      content: req.body.content,
      authorName: req.body.authorName,
      imgPath: req.file.filename,
    };
  } else {
    var obj = {
      title: req.body.title,
      content: req.body.content,
      authorName: req.body.authorName,
    };
  }

  Notice.create(obj, (err, item) => {
    if (err) {
      console.log(err);
    } else {
      res.redirect('/');
    }
  });
});

exports.updateNotice = asyncHandler(async (req, res, next) => {
  if (req.file) {
    var obj = {
      title: req.body.title,
      content: req.body.content,
      authorName: req.body.authorName,
      imgPath: req.file.filename,
    };
  } else {
    var obj = {
      title: req.body.title,
      content: req.body.content,
      authorName: req.body.authorName,
    };
  }

  const notice = await Notice.findByIdAndUpdate(req.params.id, obj, {
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
