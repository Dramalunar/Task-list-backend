import { Router } from "express";
import loginUser from "../controllers/login.js";
import createUser from "../controllers/register.js";
import validateToken from "../middlewares/token-validation.js";
import LogOut from "../controllers/logOut.js";

const User = Router();

User.post("/login",loginUser)
User.post("/register",createUser)
User.post("/logout",validateToken,LogOut)

export default User;