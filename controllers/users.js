const ErrorResponse = require('../utils/errorResponse');
const User = require('../models/User');
const asyncHandler = require('../middleware/async');
const path = require('path');

//@desc Get all users
//@route GET /api/v1/users
//@access Private
exports.getUsers = asyncHandler(async (req, res, next) => {
  const users = await User.find();

  res.status(200).json({
    success: true,
    count: users.length,
    data: users,
  });
});

//@desc Get single user
//@route GET /api/v1/users/:id
//@access Private
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

//@desc Create new user
//@route POST /api/v1/users
//@access Public
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

//@desc Update single user
//@route PUT /api/v1/users/:id
//@access Private
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

//@desc Upload photo for user
//@route PUT /api/v1/users/:id/photo
//@access Private
exports.userPhotoUpload = asyncHandler(async (req, res, next) => {
  const user = await User.findById(req.params.id);

  if (!user) {
    return next(
      new ErrorResponse(
        `resource not found with the id of ${req.params.id}`,
        404
      )
    );
  }

  if (!req.files) {
    return next(new ErrorResponse(`please upload a file!`, 400));
  }

  const file = req.files.file;

  if (!file.mimetype.startsWith('image')) {
    return next(new ErrorResponse(`please upload an image file!`, 400));
  }

  if (file.size > process.env.MAX_FILE_UPLOAD) {
    return next(
      new ErrorResponse(
        `please upload smaller image file less than ${process.env.MAX_FILE_UPLOAD}!`,
        400
      )
    );
  }

  file.name = `photo_${user._id}${path.parse(file.name).ext}`;

  file.mv(`${process.env.FILE_UPLOAD_PATH}/${file.name}`, async (err) => {
    if (err) {
      console.log(err);
      return next(new ErrorResponse(`problem with file upload`, 500));
    }
  });

  await User.findByIdAndUpdate(req.params.id, { photo: file.name });

  res.status(200).json({
    success: true,
    data: file.name,
  });
});

//@desc Delete single user
//@route DELETE /api/v1/users/:id
//@access Private
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
