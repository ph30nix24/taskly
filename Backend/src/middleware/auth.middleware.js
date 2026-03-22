import jwt from 'jsonwebtoken';
import BlackList from "../models/blackList.model.js";

/**
 * @name authMiddleWare
 * @desc Middleware to protect routes by verifying JWT token from cookies
 * @access Private
 */
export const authMiddleware = async (req, res, next) => {
    const token = req.cookies.token;
    if (!token) {
        return res.status(401).json({ message: "No token provided, authorization denied" });
    }
    const isBlacklisted = await BlackList.findOne({ token });
    if (isBlacklisted) {
        return res.status(401).json({ message: "Token is Invalid, authorization denied" });
    }
    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        req.user = decoded;
        next();
    } catch (error) {
        return res.status(401).json({ message: "Invalid token, authorization denied" });
    }
}