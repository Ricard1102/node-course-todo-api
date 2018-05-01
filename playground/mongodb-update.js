//const MongoClient = require('mongodb').MongoClient;
const { MongoClient, ObjectID } = require('mongodb');


MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
  if (err) {
    return console.log('Unable to connect to MongoDB server');
  }
  console.log('Connected to MongoDB server');

  // db.collection('Todos').findOneAndUpdate({
  //   _id: new ObjectID('5ae8710d9022f97584806659')
  // },
  //   {
  //     $set: {
  //       completed: true
  //     }
  //   },
  //   {
  //     returnOriginal: false
  //   }).then((result) => {
  //     console.log(result);
  //   })

  db.collection('Users').findOneAndUpdate({
    _id: new ObjectID('5ae8327565f33321f5966432')
  },
    {
      $set: {
        name: 'Ricard!'
      },
      $inc: {
        age: 1
      }
    }, {
      returnOriginal: false
    }).then((result) => {
      console.log(result);
    });

});
