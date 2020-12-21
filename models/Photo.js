const mongoose = require('mongoose');

Date.prototype.yyyymmdd = function () {
  var yyyy = this.getFullYear().toString();
  var mm = (this.getMonth() + 1).toString();
  var dd = this.getDate().toString();
  return (
    yyyy + '.' + (mm[1] ? mm : '0' + mm[0]) + '.' + (dd[1] ? dd : '0' + dd[0])
  );
};

const PhotoSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, 'Author required!'],
  },
  desc: {
    type: String,
    required: [true, 'Desc required'],
  },
  kind: {
    type: String,
    enum: ['가', '나', '다', '라', '마'],
  },
  imgPaths: [{ type: String }],
  createdAt: {
    type: Date,
    default: Date.now,
  },
  timestamp: {
    type: String,
  },
});

PhotoSchema.pre('save', function (next) {
  this.timestamp = new Date().yyyymmdd();
  next();
});

module.exports = mongoose.model('Photo', PhotoSchema);
