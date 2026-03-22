import express from 'express';
import { login, register, logout } from '../controllers/auth.controller.js';
const authRouter = express.Router();

/**
 * @route POST /taskly/auth/register
 * @desc Register a new user
 * @access Public
 */
authRouter.post('/register', register);

/**
 * @route POST /taskly/auth/login
 * @desc Login a user
 * @access Public
 */
authRouter.post('/login', login);


/** 
 * @route POST /taskly/auth/logout
 * @desc Logout a user by blacklisting the token
 * @access Public
 */
authRouter.post('/logout', logout);





export default authRouter;