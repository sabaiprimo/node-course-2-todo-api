const {MongoClient, ObjectID} = require('mongodb');



MongoClient.connect('mongodb://127.0.0.1:27017/TodoAppTest', (err, client)=>{
    if(err){
        return console.log('Unable to connect to MongoDb server');
    }
    console.log('Connected to MongoDB server');
    const db = client.db('TodoApp')

    //findOneAndUpdate
    // db.collection('Todos').findOneAndUpdate({
    //     _id: new ObjectID("5c4d9d9a25fd42e4b64a4eee")
    // },{
    //     //update operator
    //     $set:{
    //         completed: true
    //     }
    // },{
    //     returnOriginal: false
    // }).then((result)=>{
    //     console.log(result);
    // });

    db.collection('Users').findOneAndUpdate({
        _id: new ObjectID("5c4dacde25fd42e4b64a5165")
    },{
        //update operator
        $set:{
            name: 'Andrew'
        },
        $inc:{
            age: 1
        }
    },{
        returnOriginal: false
    }).then((result)=>{
        console.log(result);
    });

    // client.close();
});