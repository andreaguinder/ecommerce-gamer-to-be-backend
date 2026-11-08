import {
    User
} from "../models/userModel.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

const registerUser = async (req, res) => {

    try {
        const body = req.body;
        const {
            email,
            password
        } = body;

        if (!email || !password) {
            return res.status(400).json({
                error: "Email y contraseña son requeridos"
            });
        }
        const hashedPassword = await bcrypt.hash(password, 10);
        const newUser = await User.create({
            email,
            password: hashedPassword
        })
        res.json(newUser)
    } catch (e) {
        res.status(500).json({
            error: e.message
        })

    }

}

const loginUser = async (req, res) => {
    try {
            const body = req.body;
        const {
            email,
            password
        } = body;

        if (!email || !password) {
            return res.status(400).json({
                error: "Email y contraseña son requeridos"
            });
        }

        const foundUser = await User.findOne({
            email
        });

        const isValid = await bcrypt.compare(password, foundUser.password);
        if (!isValid) {
            return res.status(401).json({
                error: "Credenciales invalidas"
            });
        }


        const token = jwt.sign({ email: foundUser.email }, "contraseñasecreta", { expiresIn: "1h" });

        res.json({ 
    token, 
    user: { email: foundUser.email } 
});
    } catch (e) {
        res.status(500).json({
            error: e.message
        })
    }
}
export {
    registerUser,
    loginUser
};

