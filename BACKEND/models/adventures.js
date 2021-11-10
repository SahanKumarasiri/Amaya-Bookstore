const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const AdventureSchema = new Schema({
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
    }

})

const Adventure = mongoose.model("adventure" , AdventureSchema);
module.exports = Adventure;