const {MongoClient, ObjectID} = require('mongodb');



MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, client)=>{
    if(err){
        return console.log('Unable to connect to MongoDb server');
    }
    console.log('Connected to MongoDB server');
    const db = client.db('TodoApp')


    //delete Many
    // db.collection('Todos').deleteMany({text: 'Eat lunch'}).then((result)=>{
    //     console.log(result);
    // });

    //deleteOne
    // db.collection('Todos').deleteOne({text: 'Eat lunch'}).then((result)=>{
    //     console.log(result);
    // });

    //findOneAndDelete
    // db.collection('Todos').findOneAndDelete({completed: false}).then((result)=>{
    //     console.log(result);
    // });

    db.collection('Users').deleteMany({name: 'Sabai'});

    db.collection('Users').findOneAndDelete({_id: new ObjectID("5c46f438bfdbb63918d7e63a")}).then((results)=>{
        console.log(JSON.stringify(results, undefined, 2));
    });

    // client.close();
});