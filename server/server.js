var mongoose = require('mongoose');

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/TodoApp');

var Todo = mongoose.model('Todo', {
  text: {
    type: String,
    required: true,
    minlength: 1,
    trim: true
  },
  completed: {
    type: Boolean,
    default: false
  },
  completedAt: {
    type: Number,
    default: null
  },
});

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


var addUser = new User({
  Username: 'Ricard',
  email: 'ricard.ribatallada@gmail.com'
});

addUser.save().then((doc) => {
  console.log('Saved user', doc);
}, (e) => {
  console.log('Unable to save user');
})



// var newTodo = new Todo({
//   text: 'Cook dinner'
// });

var otherTodo = new Todo({
  text: 'Edit this video',
  completed: false,
  completedAt: '01042018'
});

// newTodo.save().then((doc) => {
//   console.log('Saved to do', doc);
// }, (e) => {
//   console.log('Unable to save todo');
// })

// otherTodo.save().then((doc) => {
//   console.log('Saved to do', doc);
// }, (e) => {
//   console.log('Unable to save todo');
// })


