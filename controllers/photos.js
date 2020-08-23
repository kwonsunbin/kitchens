const ErrorResponse = require('../utils/errorResponse');
const Photo = require('../models/Photo');
const asyncHandler = require('../middleware/async');
const path = require('path');
const fs = require('fs');
const upload = require('../server');

exports.getPhotos = asyncHandler(async (req, res, next) => {
  res.status(200).json(res.advancedResults);
});

exports.getPhoto = asyncHandler(async (req, res, next) => {
  const photo = await Photo.findById(req.params.id);

  if (!photo) {
    return next(
      new ErrorResponse(
        `resource not found with the id of ${req.params.id}`,
        404
      )
    );
  }
  res.status(200).json({
    success: true,
    data: photo,
  });
});

exports.deletePhoto = asyncHandler(async (req, res, next) => {
  const photo = await Photo.deleteOne({ _id: req.params.id });

  if (!photo) {
    return next(
      new ErrorResponse(
        `resource not found with the id of ${req.params.id}`,
        404
      )
    );
  }
  res.status(200).json({ success: true, data: {} });
});
