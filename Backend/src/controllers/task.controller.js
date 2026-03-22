import Task from "../models/tasks.model.js";
import User from "../models/users.model.js";

/**
 * @name createTask
 * @route POST /taskly/tasks/createTask
 * @description Create a new task expects { title, description, priority, dueDate }
 * @access Private
 */
const createTask = async (req, res) => {
    const { title, description, priority, dueDate } = req.body;
    const userId = req.user.id;
    if (!title || !dueDate ) {
        return res.status(400).json({ message: "All fields are required" });
    }

    try {
        const task = new Task({ title, description, priority, dueDate, createdBy: userId });
        await task.save();
        await User.findByIdAndUpdate(userId, { $push: { tasks: task._id } });
        return res.status(201).json({ message: "Task created successfully", task });
    } catch (error) {
        return res.status(500).json({ message: "Internal server error while creating task", error: error.message });
    }
}

const getTasks = async (req, res) => {
    try {
        const userId = req.user.id; 
        const tasks = await Task.find({ createdBy: userId });
        return res.status(200).json({ message: "Tasks fetched successfully", tasks });
    } catch (error) {
        return res.status(500).json({ message: "Error fetching tasks", error: error.message });
    }
}

const updateTaskStatus = async (req, res) => {
    try {
        const taskId = req.body.id;
        const task = await Task.findById(taskId);
        if (!task) {
            return res.status(404).json({ message: "Task not found" });
        }
        task.isCompleted = !task.isCompleted;
        await task.save();
        return res.status(200).json({ message: "Task status updated successfully", task });
    } catch (error) {
        return res.status(500).json({ message: "Error updating task status", error: error.message });
    }
}
export { createTask, getTasks, updateTaskStatus };