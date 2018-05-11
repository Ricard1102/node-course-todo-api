var mongoose = require('mongoose');

var User = mongoose.model('User', {
  Username: {
    type: String,
    required: true,
    minlength: 1,
    trim: true
  },
  email: {
    type: String,
    required: true,
    minlength: 1,
    trim: true
  }
});

module.exports = { User }; 