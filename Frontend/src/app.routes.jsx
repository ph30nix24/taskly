import { createBrowserRouter } from "react-router";
import Login from "./features/auth/pages/Login.jsx";
import Register from "./features/auth/pages/Register.jsx";
import Home from "./features/home/Home.jsx";
import Dashboard from "./features/dashboard/pages/Dashboard.jsx";
import Protected from "./features/auth/components/Protected.jsx";
import Profile from "./features/auth/pages/Profile.jsx";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Home />
    },
    {
        path: "/login",
        element: <Login />
    },
    {
        path: "/register",
        element: <Register />
    },
    {
        path: "/dashboard",
        element: <Protected><Dashboard /></Protected>
    },
    {
        path: "/profile",
        element: <Protected><Profile /></Protected>
    }
]);

export default router;