import { Router } from "express";
import validateToken from "../middlewares/token-validation.js";
import allTasks from "../controllers/readAllTask.js";
import createTasks from "../controllers/createTask.js";
import updateTask from "../controllers/updateTask.js";
import deletedTask from "../controllers/deleteTask.js";
import editModeTask from "../controllers/editmodeTask.js";
import completeTheTask from "../controllers/completeTask.js";
import incompleteTheTask from "../controllers/incompleteTask.js";
import deletedAll from "../controllers/deleteAll.js";

const tasks = Router();

tasks.post("/task", validateToken, allTasks);
tasks.post("/create", validateToken, createTasks);
tasks.put("/update/:id", validateToken, updateTask);
tasks.put("/editmode/:id", validateToken, editModeTask);
tasks.delete("/delete/:id", validateToken, deletedTask);
tasks.delete("/deleteall", validateToken, deletedAll);
tasks.put("/complete/:id", validateToken, completeTheTask);
tasks.put("/incomplete/:id", validateToken, incompleteTheTask);

export default tasks;
