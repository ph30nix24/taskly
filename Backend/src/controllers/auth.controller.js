import User  from "../models/users.model.js";
import BlackList  from "../models/blackList.model.js";
import { generateUsername } from "./username.controller.js";
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';

/**
 * @name register
 * @route POST /taskly/auth/register
 * @desc Register a new user expects { name, email, password }
 * @access Public
 */
export const register = async (req, res) => {
    const { name, email, password } = req.body;
    console.log(name, email, password);
    if (!name || !email || !password) {
        return res.status(400).json({ message: "All fields are required" });
    }
    try {
        const username = await generateUsername(name);
        const existingUser = await User.findOne({ email });
        if (existingUser) {
            return res.status(400).json({ message: "User already exists" });
        }
        const hashedPassword = await bcrypt.hash(password, parseInt(process.env.SALT_ROUNDS));
        const user = new User({
            name,
            username,
            email,
            password: hashedPassword
        });
        await user.save();
        const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: '1d' });
        res
        .status(201)
        .cookie('token', token, {
            httpOnly: true,
            secure: process.env.NODE_ENV === 'production', 
        })
        .json({
            message: "User registered successfully",
            user: {
                id: user._id,
                name: user.name,
                username: user.username,
                email: user.email,
                tasks: user.tasks,
                avatar: user.avatar
            }
        });
    }
    catch (error) {
        res.status(500).json({ message: "Internal server error while registering user", error: error.message });
    }
}


/**
 * @name Login
 * @route POST /taskly/auth/login
 * @desc Login a user expects { email, password }
 * @access Public
 */

export const login = async (req, res) => {
    const { email, password } = req.body;
    if (!email || !password) {
        return res.status(400).json({ message: "All fields are required" });
    }
    try {
        const user = await User.findOne({ email });
        if (!user) {
            return res.status(400).json({ message: "Invalid credentials" });
        }
        const isPasswordCorrect = bcrypt.compare(password, user.password);
        if (!isPasswordCorrect) {
            return res.status(400).json({ message: "Invalid credentials" });
        }
        const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: '1d' });
        res
        .status(200)
        .cookie('token', token, {
            httpOnly: true,
            secure: process.env.NODE_ENV === 'production',
        })
        .json({
            message: "User logged in successfully",
            user: {
                id: user._id,
                name: user.name,
                username: user.username,
                email: user.email,
                tasks: user.tasks,
                avatar: user.avatar
            }
        });
    }
    catch (error) {
        res.status(500).json({ message: "Internal server error while logging in user", error: error.message });
    }

}

/**
 * @name Logout
 * @route POST /taskly/auth/logout
 * @desc Logout a user by clearing the token cookie
 * @access Public
 */

export const logout = async (req, res) => {
    // Clear the token cookie
    const token = req.cookies.token;
    if (!token) {
        return res.status(400).json({ message: "No token found, user is not logged in" });
    }
    try {
        const decode = jwt.decode(token);
        BlackList.create({ token, expiresAt: new Date(decode.exp * 1000) });
    }
    catch (error) {
        res.status(500).json({ message: "Internal server error while logging out user", error: error.message });
    }
    res
    .status(200)
    .clearCookie('token', {
        httpOnly: true,
        secure: process.env.NODE_ENV === 'production',
    })
    .json({ message: "User logged out successfully" });

}


