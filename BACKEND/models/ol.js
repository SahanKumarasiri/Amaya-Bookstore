const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const OLSchema = new Schema({
    noteName:{
        type:String,
        unique:true,
    },
    author:{
        type:String,
    },
    noteURL:{
        type:String,
    },
    noteImage:{
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

const OL = mongoose.model("ol" , OLSchema);
module.exports = OL;