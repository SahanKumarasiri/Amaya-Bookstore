const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ProgrammingSchema = new Schema({
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

const Programming = mongoose.model("programming" , ProgrammingSchema);
module.exports = Programming;