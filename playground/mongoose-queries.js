const { ObjectID } = require('mongodb');


const { mongoose } = require('./../server/db/mongoose');
const { Todo } = require('./../server/models/todo');
const { User } = require('./../server/models/user');

var id = '6af58ff908d0d1ee8f15989e'; //ID from Todos collection
var user_id = '5af56c6eef998d3678541808'; //ID from Users collection

if (!ObjectID.isValid(user_id)) {
  console.log('User ID not valid');
}

// if (!ObjectID.isValid(id)) {
//   console.log('ID not valid');
// }

//mongoose does not require new ObjectID conversion
// Todo.find({
//   _id: id
// }).then((todos) => {
//   console.log('Todos', todos);
// });


// Todo.findOne({
//   _id: id
// }).then((todo) => {

//   console.log('Todo', todo);
// });

// Todo.findById(id).then((todo) => {
//   if (!todo) {
//     return console.log('Id not found');
//   }
//   console.log('Todo By ID', todo);
// }).catch((e) => console.log(e));


User.find({
  _id: user_id
}).then((users) => {
  console.log('Users', users);
});


User.findOne({
  _id: user_id
}).then((user) => {

  console.log('User', user);
});

User.findById(user_id).then((user) => {
  if (!user) {
    return console.log('Id not found');
  }
  console.log(JSON.stringify(user, undefined, 2));
}).catch((e) => console.log(e));

