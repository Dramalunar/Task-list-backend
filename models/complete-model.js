import { Schema, model } from "mongoose";

const taskSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  description: String,
  status: {
    type: Boolean,
    default: true,
  },
  createdAt: {
    type: Date,
    default: Date.now(),
  },
  editMode: {
    type: Boolean,
    default: false,
  },
});

const CompleteTasks = model("complete_tasks", taskSchema);

export default CompleteTasks;
