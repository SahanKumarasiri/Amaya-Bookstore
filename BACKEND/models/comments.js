const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const CommentSchema = new Schema({
    name:{
        type: String
    },
    email:{
        type:String
    },
    message:{
        type:String
    },
    date:{
        type:String
    },
    id:{
        type:String
    }
})

const Comment = mongoose.model("comment" , CommentSchema);
module.exports = Comment;