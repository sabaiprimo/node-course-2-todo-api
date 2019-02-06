const {ObjectID} = require('mongodb');

const {mongoose} = require('../server/db/mongoose');
const {Todo} = require('../server/models/todo');
const {User} = require('../server/models/user');

// Todo.remove({}).then((result)=> {
//     console.log(result);
// });

// Todo.findOneAndRemove()
// Todo.findOneAndRemove({_id:'5c59b11c25fd42e4b64aaf0d'}).then((todo)=>{

// });

Todo.findByIdAndRemove('5c59b11c25fd42e4b64aaf0d').then((todo)=>{
    console.log(todo);
});