const mongoose = require('mongoose')

const TaskSchema = new mongoose.Schema({
        name:{
            type:String,
            required : [true,'cant create an empty task'],
            maxlength : [40,'name cant pass 20 characters'],
            trim : true,
        
        
        },
        completed :{
            type:Boolean,
            default:false,
 
        },

    })


module.exports = mongoose.model('Task', TaskSchema)