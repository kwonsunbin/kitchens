const mongoose = require('mongoose');

Date.prototype.yyyymmdd = function () {
  var yyyy = this.getFullYear().toString();
  var mm = (this.getMonth() + 1).toString();
  var dd = this.getDate().toString();
  return (
    yyyy + '.' + (mm[1] ? mm : '0' + mm[0]) + '.' + (dd[1] ? dd : '0' + dd[0])
  );
};

const NoticeSchema = new mongoose.Schema({
  authorName: {
    type: String,
    required: [true, 'Author required!'],
  },
  title: {
    type: String,
    required: [true, 'Add Title'],
  },

  content: {
    type: String,
    required: [true, 'Add Comment'],
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  timestamp: {
    type: String,
  },
});

NoticeSchema.pre('save', function (next) {
  this.timestamp = new Date().yyyymmdd();
  next();
});

module.exports = mongoose.model('Notice', NoticeSchema);
