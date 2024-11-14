const { default: mongoose, Types } = require("mongoose")

const taskSchema=mongoose.Schema({
    title:{type:String, require: true},
})