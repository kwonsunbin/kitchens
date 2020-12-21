const ErrorResponse = require('../utils/errorResponse');
const User = require('../models/User');
const asyncHandler = require('../middleware/async');

exports.getUsers = asyncHandler(async (req, res, next) => {
  const users = await User.find();

  res.status(200).json({
    success: true,
    count: users.length,
    data: users,
  });
});

exports.getUser = asyncHandler(async (req, res, next) => {
  const user = await User.findById(req.params.id);

  if (!user) {
    return next(
      new ErrorResponse(
        `resource not found with the id of ${req.params.id}`,
        404
      )
    );
  }
  res.status(200).json({
    success: true,
    data: user,
  });
});

exports.createUser = asyncHandler(async (req, res, next) => {
  try {
    const user = await User.create(req.body);

    res.status(201).json({
      success: true,
      data: user,
    });
  } catch (err) {
    next(err);
  }
});

exports.updateUser = asyncHandler(async (req, res, next) => {
  const user = await User.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
    runValidators: true,
  });
  if (!user) {
    return next(
      new ErrorResponse(
        `resource not found with the id of ${req.params.id}`,
        404
      )
    );
  }
  res.status(200).json({ success: true, data: user });
});

exports.deleteUser = asyncHandler(async (req, res, next) => {
  const user = await User.findByIdAndDelete(req.params.id);

  if (!user) {
    return next(
      new ErrorResponse(
        `resource not found with the id of ${req.params.id}`,
        404
      )
    );
  }
  res.status(200).json({ success: true, data: {} });
});
