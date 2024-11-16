import mongoose from 'mongoose';

const taskSchema=mongoose.Schema({

 name: {
 type: String,
 required: true
 },
 startDate: {
    type: String,
    required: true,
    match: /^\d{4}-\d{2}-\d{2}$/ // Format YYYY-MM-DD
},
startTime: {
    type: String,
    required: true,
    match: /^\d{2}:\d{2}$/ // Format HH:MM
},
completed: {
    type: Boolean,
    default: false
},

});
const Task = mongoose.model('Task', taskSchema);
export default Task;

