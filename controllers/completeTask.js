import connectDB from "../middlewares/connect-db.js";
import AllTasks from "../models/Totales-model.js";
import CompleteTasks from "../models/complete-model.js";


async function completeTheTask(req,res) {
    const TaskId = req.params.id;
    

    connectDB();

    try {
       const completeTask = await AllTasks.findOneAndUpdate({_id: TaskId},{status:true},{new:true}).exec();
        console.log(completeTask)
        
        
        
        return res.status(200).end();       
    } catch (error) {
        console.error("Hubo un error al encontrar las tareas");
        return res.status(404).json({error:"error al buscar las tareas"})
    }
}

export default completeTheTask;      