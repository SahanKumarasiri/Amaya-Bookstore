const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const NovelSchema = new Schema({
    bookName:{
        type:String,
        unique:true,
    },
    author:{
        type:String,
    },
    bookURL:{
        type:String,
    },
    bookImage:{
        type:String,
    },
    downloads:{
        type:String,
    },
    hearts:{
        type:String
    },
    category:{
        type:String
    }

})

const Novel = mongoose.model("novel" , NovelSchema);
module.exports = Novel;