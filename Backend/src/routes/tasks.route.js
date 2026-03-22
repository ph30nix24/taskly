import express from "express";
import { authMiddleware } from "../middleware/auth.middleware.js";
import { createTask, getTasks, updateTaskStatus } from "../controllers/task.controller.js";

const taskRouter = express.Router();

/**
 * @route POST /taskly/tasks/createTask
 * @desc Create a new task
 * @access Private
 */

taskRouter.post("/createTask", authMiddleware, createTask);


/**
 * @route GET /taskly/tasks/getTasks
 * @desc Get all tasks
 * @access Private
 */

taskRouter.get("/getTasks", authMiddleware, getTasks);

/**
 * @ route PATCH /taskly/tasks/updateTaskStatus
 * @desc Update the status of a task
 * @access Private
 */

taskRouter.patch("/updateTaskStatus", authMiddleware, updateTaskStatus);

export default taskRouter