import { useContext } from "react";
import { TaskContext } from "../services/tasks.context";
import { createTaskApi, getTasksApi, updateStatusApi } from "../services/task.apis";

export const useTask = () => {
    const context = useContext(TaskContext);
    
    if (!context) {
        throw new Error("useTask must be used within a TaskProvider");
    }
    /**
     * @name handleCreateTask
     * @description Create a new task
     * @route POST /taskly/tasks/createTask
     * @param {object} task
     * @access Private
     */
    const { tasks, setTasks, loading, setLoading } = context;
    const handleCreateTask = async ({title, description, priority, dueDate }) => {
        setLoading(true);
        try {
            const data = await createTaskApi({title, description, priority, dueDate});
            setTasks(prev => [...prev, data.task]);
        } catch (error) {
            console.log("Error While Creating Task: ", error);
            throw error
        }
        finally {
            setLoading(false);
        }
    }

    /**
     * @name handleStatusUpdate
     * @description Update the status of a task
     * @param {string} id
     * @access Private
     * @route PATCH /taskly/tasks/updateTaskStatus
     */
    const handleStatusUpdate = async ({ id }) => {
        setLoading(true);
        try {
            await updateStatusApi({ id });
            // setTasks(prev => prev.map(task => task._id === id ? { ...task, status: data.status } : task));
            const data = await getTasksApi();
            setTasks(data.tasks);
        } catch (error) {
            console.log("Error While Updating Task: ", error);
            throw error
        }
        finally {
            setLoading(false);
        }
    }

    return { tasks, loading, handleCreateTask, handleStatusUpdate };
}