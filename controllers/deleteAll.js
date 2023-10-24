import connectDB from "../middlewares/connect-db.js";
import AllTasks from "../models/Totales-model.js";

async function deletedAll(req, res) {

  const UserId = req.UserId;

  connectDB();

  try {
    await AllTasks.deleteMany({UserId: UserId}).exec();

    return res.status(200).end();
  } catch (error) {
    console.error("Hubo un error al encontrar las tareas");
    res.status(404).json({ error: "error al buscar las tareas" });
  }
}

export default deletedAll;
