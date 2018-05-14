var express = require('express');
var bodyParser = require('body-parser');
var { ObjectID } = require('mongodb');

var { mongoose } = require('./db/mongoose');
var { Todo } = require('./models/todo');
var { User } = require('./models/user');

var app = express();
const port = process.env.PORT || 3000;

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

app.get('/todos', (req, res) => {
  Todo.find().then((todos) => {
    res.send({ todos });
  }, (e) => {
    res.status(400).send(e);
  });
});


//GET /todos/1234324 /:id is a url parameter

app.get('/todos/:id', (req, res) => {
  var id = req.params.id;

  if (!ObjectID.isValid(id)) {
    return res.status(404).send();
  }
  Todo.findById(id).then((todo) => {
    if (!todo) {
      return res.status(404).send();
    }

    res.send({ todo });
  }).catch((e) => {
    res.status(400).send();
  });


});
//valid id using is Valid
//404  -send back an empty body res.status(404).send();

//findById
//success
//if todo - send it back
// if not todo - send back a 404 with empty body
//error
//400 - request was not valid, send nothing back because the error could contain personal info



app.listen(port, () => {
  console.log(`Started on port ${port}`);
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


