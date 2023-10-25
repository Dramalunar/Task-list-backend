import connectDB from "../middlewares/connect-db.js";
import AllTasks from "../models/Totales-model.js";

async function editModeTask(req, res) {
  const TaskID = req.params.id;

  connectDB();

  try {
    await AllTasks.findOneAndUpdate({ _id: TaskID }, { editMode: true }).exec();

    return res.status(200).end();
  } catch (error) {
    console.error("Hubo un error al encontrar las tareas");
    return res.status(404).json({ error: "error al buscar las tareas" });
  }
}

export default editModeTask;
