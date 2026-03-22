import express from 'express';
import { authMiddleware } from '../middleware/auth.middleware.js';
import { updateAvatar, getCurrentUser, updateInfo } from '../controllers/user.controller.js';

const userRouter = express.Router();

/**
 * @route get /taskly/users/get-me
 * @desc Get the currently authenticated user's information
 * @access Private
 */
userRouter.get('/get-me', authMiddleware, getCurrentUser);

/**
 * @route patch /taskly/users/update-avatar
 * @desc Update the avatar of the currently authenticated user
 * @access Private
 */

userRouter.patch('/update-avatar', authMiddleware, updateAvatar);

/**
 * @route patch /taskly/users/update-info
 * @desc Upadate the username and name of the currently authenticated user
 * @access Private
 */

userRouter.patch('/update-info', authMiddleware, updateInfo);
export default userRouter;