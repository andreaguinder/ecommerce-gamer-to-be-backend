import { User } from "../models/userModel.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

const JWT_SECRET = process.env.JWT_SECRET || "contraseñasecreta";

const registerUser = async (req, res) => {
    try {
        const { email, password } = req.body;

        if (!email || !password) {
            return res.status(400).json({ error: "Email y contraseña son requeridos" });
        }

        const hashedPassword = await bcrypt.hash(password, 10);
        const newUser = await User.create({
            email,
            password: hashedPassword
        });

        res.json(newUser);
    } catch (e) {
        res.status(500).json({ error: e.message });
    }
};

const loginUser = async (req, res) => {
    try {
        const { email, password } = req.body;

        if (!email || !password) {
            return res.status(400).json({ error: "Email y contraseña son requeridos" });
        }

        const foundUser = await User.findOne({ email });
        
        if (!foundUser) {
            return res.status(401).json({ error: "Credenciales inválidas" });
        }

        const isValid = await bcrypt.compare(password, foundUser.password);
        if (!isValid) {
            return res.status(401).json({ error: "Credenciales inválidas" });
        }

        
        const token = jwt.sign(
            { id: foundUser._id, email: foundUser.email }, 
            JWT_SECRET, 
            { expiresIn: "1h" }
        );

        res.json({ 
            token, 
            user: { id: foundUser._id, email: foundUser.email } 
        });
    } catch (e) {
        res.status(500).json({ error: "Error interno del servidor", details: e.message });
    }
};

export {
    registerUser,
    loginUser
};