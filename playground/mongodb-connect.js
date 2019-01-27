// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');
// var user = {name: 'Sabai',age: 19};
// var {name}= user;
// console.log(name);

var obj = new ObjectID();
console.log(obj);


MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, client)=>{
    if(err){
        return console.log('Unable to connect to MongoDb server');
    }
    console.log('Connected to MongoDB server');
    const db = client.db('TodoApp')

    // db.collection('Todos').insertOne({
    //     text : 'Something to do',
    //     complete: false
    // },(err, result)=>{
    //     if(err){
    //         return console.log('Unable to insert todo',err);
    //     }

    //     console.log(JSON.stringify(result.ops, undefined, 2));
    // });

    // db.collection('Users').insertOne({
    //     name: 'Sabai',
    //     age: 20,
    //     location: 'Korat'
    // },(err,result)=>{
    //     if(err){
    //         return console.log('Unable to insert user',err);
    //     }

    //     console.log(result.ops[0]._id.getTimestamp());
    // });


    client.close();
});