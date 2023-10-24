import connectDB from "../middlewares/connect-db.js";
import AllTasks from "../models/Totales-model.js";

async function createTasks(req, res) {
  try {
    connectDB();

    const UserId = req.UserId;

    const {title, description } = req.body;

    if (!UserId || !title)
      return res
        .status(404)
        .json({ error: "error al tomar los datos de la nueva tarea" });

    const newTask = {
      UserId: UserId,
      title: title,
      description: description,
    };

    await AllTasks.create(newTask);

    return res.status(200).end();
  } catch (error) {
    console.error("Hubo un error al crear las tareas");
    return res.status(404).json({ error: "error al crear las tareas" });
  }
}

export default createTasks;
