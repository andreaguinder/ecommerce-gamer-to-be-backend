import {Router} from "express";
import { getAllProducts, getProductById, createProduct, updateProduct, deleteProduct } from "../controllers/productsControllers.js";

const productsRouter = Router();

// Devuelvo todos los productos ( un arreglo JSON con varios elementos)
productsRouter.get("/", getAllProducts);

// Devolver cualquier producto por su ID 
productsRouter.get("/:id", getProductById);

//creación de un nuevo elemento
productsRouter.post("/", createProduct);

//edición de un elemento
productsRouter.put("/:id", updateProduct);

//eliminación de un elemento
productsRouter.delete("/:id", deleteProduct);



export {productsRouter};  
