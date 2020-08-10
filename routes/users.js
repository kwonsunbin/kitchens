const express = require('express');
const {
  getUsers,
  getUser,
  createUser,
  updateUser,
  deleteUser,
  userPhotoUpload,
} = require('../controllers/users');
const router = express.Router();

router.route('/').get(getUsers).post(createUser);

router.route('/:id').get(getUser).put(updateUser).delete(deleteUser);

router.route('/:id/photo').put(userPhotoUpload);
module.exports = router;
