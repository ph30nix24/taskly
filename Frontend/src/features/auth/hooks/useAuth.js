import { useContext } from "react";
import { AuthContext } from "../services/auth.context";
import { registerController, loginController, logoutController, updateAvatar, getCurrentUserController, updateInfo } from "../services/auth.apis";

export const useAuth = () => {
    const context = useContext(AuthContext);
    if (!context) {
        throw new Error("useAuth must be used within an AuthProvider");
    }
    const { user, setUser, loading, setLoading, avatar, setAvatar } = context;

    const handleRegister = async({ name, email, password }) => {
        setLoading(true);
        try {
            const data = await registerController({ name, email, password });
            setUser(data.user);
        } catch (error) {
            console.log(error);
        } finally {
            setLoading(false);
        }
    }
    const handleLogin = async({ email, password }) => {
        setLoading(true);
        try {
            const data = await loginController({ email, password });
            setUser(data.user);
        } catch (error) {
            console.log(error);
        } finally {
            setLoading(false);
        }
    }
    const handleLogout = async() => {
        setLoading(true);
        try {
            await logoutController();
            setUser(null);
        } catch (error) {
            console.log(error);
        } finally {
            setLoading(false);
        }
    }
    const handleUpdateAvatar = async({ image }) => {
        setLoading(true);
        try {
            await updateAvatar({ image }); 
            const data = await getCurrentUserController();
            setUser(data.user);
        } catch (error) {
            console.error('Error during updating avatar:', error);
        } finally {
            setLoading(false);
        }
    }

    const handleInfoUpdate = async({ username, name }) => {
        setLoading(true);
        try {
            await updateInfo({ username, name }); 
            const data = await getCurrentUserController();
            setUser(data.user);
        } catch (error) {
            console.error('Error during updating info:', error);
        } finally {
            setLoading(false);
        }
    }

    
    return { loading, user, handleLogin, handleRegister, handleLogout, avatar, setAvatar, handleUpdateAvatar, handleInfoUpdate };
}