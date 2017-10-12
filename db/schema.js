const mongoose = require('mongoose');


const Schema = mongoose.Schema;

const ideaSchema = new Schema({
   title: {
       type: String,
       default: "New Idea Title"
   },
    description: {
        type:String,
        default: "New Idea Description"
    },
    date: {
        type: Date,
        default: Date.now,

    },
   
});
const userSchema = new Schema({
    userName: {
        type: String,  
    },
    password: {
        type: String,
    },
    ideas: [ideaSchema]
});

const IdeaModel = mongoose.model('Idea', ideaSchema)
const UserModel = mongoose.model('User', userSchema)


module.exports = {
   
    IdeaModel: IdeaModel,
    UserModel: UserModel,

}