const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
  username: String,
  password: String,
  admin: { type: Boolean, default: false },
});

// find one user by using username
UserSchema.statics.findOneByUsername = function (username) {
  return this.findOne({
    username,
  }).exec();
};

// verify the password of the User documment
UserSchema.methods.verify = function (password) {
  return this.password === password;
};

module.exports = mongoose.model('User', UserSchema);
