import express from "express";
import cors from 'cors';
import 'dotenv/config';
import { productsRouter } from "./src/routes/productsRouter.js";
import { connectDB } from "./src/config/connectDB.js";
import { authRouter } from "./src/routes/authRouter.js";
import { contactRouter } from "./src/routes/contactRouter.js";


const server = express();
server.use(express.json());
server.use(cors());
server.use("/products", productsRouter);
server.use("/auth", authRouter);
server.use("/contact", contactRouter);
server.listen(process.env.PORT, () => {
  connectDB();
  console.log(`Servidor escuchando en el puerto ${process.env.PORT}`);
});