import axios from 'axios';
const API = import.meta.env.VITE_API_URL;

const API_URL = `${API}taskly/auth`;
const USER_URL = `${API}taskly/users`;

export const registerController = async ({ name, email, password }) => {
    try {
        const response = await axios.post(`${API_URL}/register`, { name, email, password }, {
            withCredentials: true
        });
        console.log(response.data.message);
        return response.data;
    } catch (error) {
        console.error('Error during registration:', error);
        throw error
    }
}

export const loginController = async ({ email, password }) => {
    try {
        const response = await axios.post(`${API_URL}/login`, { email, password }, {
            withCredentials: true
        });
        
        console.log(response.data.message);
        return response.data;
    } catch (error) {
        console.error('Error during login:', error);
        throw error
    }
}

export const logoutController = async () => {
    try {
        const response = await axios.post(`${API_URL}/logout`,{},{
            withCredentials: true
        });
        console.log(response.data.message);
        return response.data;
    } catch (error) {
        console.error('Error during logout:', error);
        throw error
    }
}

export const getCurrentUserController = async () => {
    try {
        const response = await axios.get(`http://localhost:3000/taskly/users/get-me`, {
            withCredentials: true
        });
        return response.data;
    } catch (error) {
        console.error('Error during getting current user:', error);
    }
}

export const updateAvatar = async ({ image}) => {
    try {
        const response = await axios.patch(`${USER_URL}/update-avatar`, { image }, {
            withCredentials: true
        });
        return response.data;
    } catch (error) {
        console.error('Error during updating avatar:', error);
    }
}

export const updateInfo = async ({ username, name }) => {
    try {
        await axios.patch(`${USER_URL}/update-info`, { username, name }, {
            withCredentials: true
        });
    } catch (error) {
        console.error('Error during updating info:', error);
        throw new error
    }
}