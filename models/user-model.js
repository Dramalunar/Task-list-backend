import { Schema, model } from "mongoose";

const taskSchema = new Schema({
  username: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
});

const AllUsers = model("users", taskSchema);

export default AllUsers;
