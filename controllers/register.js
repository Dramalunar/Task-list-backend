import connectDB from "../middlewares/connect-db.js";
import generateAcessToken from "../middlewares/generate-token.js";
import AllUsers from "../models/user-model.js";
import bcrypt from "bcrypt";


async function createUser(req, res) {
  try {
    connectDB();

    const { username ,email, password } = req.body;
    const saltRounds = 10;

    if (!username||!email||!password)
      return res
        .status(404)
        .json({ error: "error al tomar los datos del nuevo usuario tarea" });


    const hashPassword = await bcrypt.hash(password,saltRounds)
    
    const newUser = {
      username:username,
      email: email,
      password: hashPassword,
    };

    

   const newUserdb = await AllUsers.create(newUser);

     const tokenUser = {
      UserId: newUserdb.UserId,
      username: newUserdb.username,
      email: newUserdb.email,
    };

    const token = generateAcessToken(tokenUser);
  
   

    return res.status(200).json({token});
  } catch (error) {
    console.error("Hubo un error al crear el usuario");
    return res.status(404).json({ error: "error al crear usuario" });
  }
}

export default createUser;


