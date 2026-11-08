import jwt from "jsonwebtoken";

const authMiddleware = (req, res, next) => {
    const authHeader = req.headers.authorization;
    if (!authHeader) {
        return res.status(401).json({ error: "Acceso no autorizado" });
    }
    const token = authHeader.split(" ")[1];
    if (!token) {
        return res.status(401).json({ error: "Token no proporcionado" });
    }
    try {
        const decoded = jwt.verify(token, "contraseñasecreta");
        req.user = decoded;
        next();
    } catch (e) {
        return res.status(401).json({ error: "Token inválido" });
    }
};
export { authMiddleware };