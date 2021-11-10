const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ALSchema = new Schema({
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
    }

})

const AL = mongoose.model("al" , ALSchema);
module.exports = AL;