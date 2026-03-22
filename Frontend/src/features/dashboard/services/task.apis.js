import axios from "axios";
const API = import.meta.env.VITE_API_URL;

const API_URL = `${API}/taskly/tasks`;

export const createTaskApi = async({title, description, priority, dueDate }) => {
    console.log(title, description, priority, dueDate);
    try {
        const response = await axios.post(`${API_URL}/createTask`, {title, description, dueDate, priority}, {withCredentials: true});
        return response.data;
    } catch(error) {
        console.log("Error While Creating Task: ", error);
        throw error
    }
}

export const getTasksApi = async () => {
    try {
        const response = await axios.get(`${API_URL}/getTasks`, {withCredentials: true});
        return response.data;
    } catch(error) {
        console.log("Error While Getting Tasks: ", error);
        throw error
    }
}

export const updateStatusApi = async({ id }) => {
    try {
        const response = await axios.patch(`${API_URL}/updateTaskStatus`, { id }, {withCredentials: true});
        return response.data;
    } catch(error) {
        console.log("Error While Updating Task: ", error);
        throw error
    }
}