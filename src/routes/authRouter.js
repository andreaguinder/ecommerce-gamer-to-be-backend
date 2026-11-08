import { Router } from "express";
import { registerUser, loginUser } from "../controllers/authControllers.js";

const authRouter = Router();

// registro de usuario
authRouter.post("/register", registerUser);

// logueo de usuario
authRouter.post("/login", loginUser);



export { authRouter };