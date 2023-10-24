import connectDB from "../middlewares/connect-db.js";
import Task from "../models/Totales-model.js";

async function allTasks(req, res) {
  connectDB();

  try {
    const UserId = req.UserId;

    console.log(UserId);

    const findAllTask = await Task.find({ UserId: UserId }).exec();

    res.status(200).json({ findAllTask,UserId });
  } catch (error) {
    console.error("Hubo un error al encontrar las tareas");
    res.status(404).json({ error: "error al buscar las tareas" });
  }
}

export default allTasks;
