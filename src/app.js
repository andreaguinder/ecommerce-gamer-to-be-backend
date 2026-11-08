import express from "express";
import cors from 'cors';
import 'dotenv/config';
import { productsRouter } from "./routes/productsRouter.js";
import { connectDB } from "./config/connectDB.js";
import { authRouter } from "./routes/authRouter.js";
import { contactRouter } from "./routes/contactRouter.js";


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