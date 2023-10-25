import connectDB from "../middlewares/connect-db.js";
import AllTasks from "../models/Totales-model.js";
import CompleteTasks from "../models/complete-model.js";

async function incompleteTheTask(req, res) {
  const TaskId = req.params.id;

  connectDB();

  try {
    await AllTasks.findOneAndUpdate({ _id: TaskId }, { status: false }).exec();

    await CompleteTasks.findOneAndDelete({ _id: TaskId }).exec();

    return res.status(200).end();
  } catch (error) {
    console.error("Hubo un error al encontrar las tareas");
    return res.status(404).json({ error: "error al buscar las tareas" });
  }
}

export default incompleteTheTask;
