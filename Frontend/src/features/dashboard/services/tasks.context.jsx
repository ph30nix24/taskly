import { createContext, useState } from "react";
import { getTasksApi } from "./task.apis";
import { useEffect } from "react";
import { useAuth } from "../../auth/hooks/useAuth";

export const TaskContext = createContext();

export const TaskProvider = ({ children }) => {
    const [tasks, setTasks] = useState([]);
    const [loading, setLoading] = useState(false);
    const { user } = useAuth();
    useEffect(() => {
        const fetchTasks = async() => {
            setLoading(true);
            try {
                const data = await getTasksApi();
                setTasks(data.tasks);
                setLoading(false);
            }
            catch (error) {
                console.log("Error While Getting Tasks: ", error);
            }
            finally {
                setLoading(false);
            }
        }
        if(user) {
            fetchTasks();
        }
    }, [user]);
    return (
        <TaskContext.Provider value={{ tasks, setTasks, loading, setLoading }}>
            {children}
        </TaskContext.Provider>
    )
}