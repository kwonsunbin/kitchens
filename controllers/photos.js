const ErrorResponse = require('../utils/errorResponse');
const Photo = require('../models/Photo');
const asyncHandler = require('../middleware/async');
const path = require('path');

//@desc Upload photo for user
//@route PUT /api/v1/users/:id/photo
//@access Private
exports.PhotoUpload = asyncHandler(async (req, res, next) => {
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

  file.name = `photo_${path.parse(file.name).ext}`;

  file.mv(`${process.env.FILE_UPLOAD_PATH}/${file.name}`, async (err) => {
    if (err) {
      console.log(err);
      return next(new ErrorResponse(`problem with file upload`, 500));
    }
  });

  await Photo.create({ path: file.name });

  res.status(200).json({
    success: true,
    data: file.name,
  });
});
