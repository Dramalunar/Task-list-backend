import connectDB from "../middlewares/connect-db.js";
import generateAcessToken from "../middlewares/generate-token.js";
import AllUsers from "../models/user-model.js";
import bcrypt from "bcrypt";

async function loginUser(req, res) {
  try {
    connectDB();

    const { email, password } = req.body;

    if (!email || !password)
      return res
        .status(404)
        .json({ error: "error al tomar los datos del usuario" });

    const User = await AllUsers.findOne({ email: email }).exec();

    const isEqual = bcrypt.compareSync(password, User.password);

    if (!isEqual) {
      return res.status(401).json({ error: "contraseña incorrecta" });
    }

    const actualUser = {
      UserId: User._id,
      username: User.username,
      email: email,
    };

    const token = generateAcessToken(actualUser);

    return res.status(200).json({ token });
  } catch (error) {
    console.error("Hubo un error iniciar sesion");
    return res.status(404).json({ error: "error al iniciar sesion" });
  }
}


export default loginUser;
