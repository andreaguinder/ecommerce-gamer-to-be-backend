import { Product } from "../models/productModel.js";

const getAllProducts = async (req, res) => {
try {
        const products = await Product.find();
        res.json(products);
    } catch (error) {
        res.status(500).json({ error: "Error al obtener los productos" });
    }
}

const getProductById = async (req, res) => {
try {
        const { id } = req.params;
        const foundProduct = await Product.findById(id);

        if (!foundProduct) {
            return res.status(404).json({ error: "Producto no encontrado" });
        }

        res.json(foundProduct);
    } catch (error) {
        res.status(400).json({ error: "ID inválido o error en la búsqueda" });
    }

}

const createProduct = async (req, res) => {
try {
        const body = req.body;
        const savedProduct = await Product.create(body);
        res.status(201).json(savedProduct);
    } catch (error) {
        res.status(400).json({ error: "Error al crear el producto", details: error.message });
    }

}

const updateProduct = async (req, res) => {
    const id = req.params.id;
    const body = req.body;

    try {
        const updatedProduct = await Product.findByIdAndUpdate(id, body, { new: true });
        if (!updatedProduct) {
            return res.status(404).json({ error: "Producto no encontrado" });
        }
        res.json(updatedProduct);
    } catch (error) {
        res.status(400).json({ error: "Error al actualizar el producto", details: error.message });
    }
}

const deleteProduct = async (req, res) => {
    const id = req.params.id;

    try {
        const deletedProduct = await Product.findByIdAndDelete(id);
        if (!deletedProduct) {
            return res.status(404).json({ error: "Producto no encontrado" });
        }
        res.json({ message: "Producto eliminado", data: deletedProduct });
    } catch (error) {
        res.status(400).json({ error: "Error al eliminar el producto", details: error.message });
    }
}

export { getAllProducts, getProductById, createProduct, updateProduct, deleteProduct };