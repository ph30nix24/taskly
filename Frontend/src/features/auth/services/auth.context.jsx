import { createContext, useEffect, useState } from "react";
import { getCurrentUserController } from "./auth.apis.js";
export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [avatar, setAvatar] = useState(
    user?.avatar || "./imgs/profileIcon.png",
  );
  useEffect(() => {
    if (user?.avatar) setAvatar(user.avatar);
  }, [user?.avatar]);
  useEffect(() => {
    const fetchCurrentUser = async () => {
      setLoading(true);
      try {
        const data = await getCurrentUserController();
        setUser(data.user);
        setLoading(false);
      } catch (error) {
        console.error("Error during getting current user:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchCurrentUser();
  }, []);
  return (
    <AuthContext.Provider
      value={{ user, setUser, loading, setLoading, avatar, setAvatar }}
    >
      {children}
    </AuthContext.Provider>
  );
};
