const mongoose = require('mongoose');

Date.prototype.yyyymmdd = function () {
  var yyyy = this.getFullYear().toString();
  var mm = (this.getMonth() + 1).toString();
  var dd = this.getDate().toString();
  return (
    yyyy + '.' + (mm[1] ? mm : '0' + mm[0]) + '.' + (dd[1] ? dd : '0' + dd[0])
  );
};

const RequestSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, 'Please add a title!'],
    trim: true,
  },
  authorName: {
    type: String,
    require: [true, 'Please ass a authorName!'],
  },
  answer: {
    type: String,
  },
  password: {
    type: String,
    required: [true, 'Please ass a password'],
  },

  content: {
    type: String,
    required: [true, 'Please add Content!'],
  },

  createdAt: {
    type: Date,
    default: Date.now,
  },
  timestamp: {
    type: String,
  },
});

RequestSchema.pre('save', function (next) {
  this.timestamp = new Date().yyyymmdd();
  next();
});

module.exports = mongoose.model('Request', RequestSchema);
