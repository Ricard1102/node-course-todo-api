var express = require('express');
var bodyParser = require('body-parser');


var { mongoose } = require('./db/mongoose');
var { Todo } = require('./models/todo');
var { User } = require('./models/user');

var app = express();

//takes the bodyParser middleware. This is the middleware we need to send to express

app.use(bodyParser.json());

//Route for resource creation. Body is created by body parser

app.post('/todos', (req, res) => {
  var todo = new Todo({
    text: req.body.text
  });
  todo.save().then((doc) => {
    res.send(doc);
  }, (e) => {
    res.status(400).send(e);
  });
});


app.listen(3000, () => {
  console.log('Started on port 3000');
})


module.exports = { app };

// var addUser = new User({
//   Username: 'Ricard',
//   email: 'ricard.ribatallada@gmail.com'
// });

// addUser.save().then((doc) => {
//   console.log('Saved user', doc);
// }, (e) => {
//   console.log('Unable to save user', e);
// })



// // var newTodo = new Todo({
// //   text: 'Cook dinner'
// // });

// var otherTodo = new Todo({
//   text: 'Edit this video',
//   completed: false,
//   completedAt: '01042018'
// });

// // newTodo.save().then((doc) => {
// //   console.log('Saved to do', doc);
// // }, (e) => {
// //   console.log('Unable to save todo');
// // })

// // otherTodo.save().then((doc) => {
// //   console.log('Saved to do', doc);
// // }, (e) => {
// //   console.log('Unable to save todo');
// // })


