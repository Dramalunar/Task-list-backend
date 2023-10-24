import { Schema, model } from "mongoose";

const taskSchema = new Schema({
    UserId:{
        type: String,
        required: true,
    },
    title: {
        type: String,
        required: true,
    },
    description: String,
    status: {
        type: Boolean,
        default: false,
    },
    createdAt: {
        type: Date,
        default: Date.now(),
    },
    editMode:{
        type:Boolean,
        default: false,
    },
});



const AllTasks = model("all_tasks",taskSchema);

export default AllTasks;