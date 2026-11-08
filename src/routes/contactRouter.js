import { Router } from "express";
import { createContactMessage } from "../controllers/contactControllers.js";

const contactRouter = Router();

// Endpoint POST para el formulario de contacto
contactRouter.post("/", createContactMessage);

export { contactRouter };