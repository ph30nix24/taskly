import express from "express";
import cors from "cors";
import morgan from "morgan";
import cookieParser from "cookie-parser";
const app = express();

app.use(cors({
    origin: "https://taskly-beta-hazel.vercel.app",
    credentials: true
}));


app.use(morgan("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
/*  routes  */


import authRouter from "./routes/auth.route.js";
app.use("/taskly/auth", authRouter);

{/* user  routes  */}
import userRouter from "./routes/user.route.js";
app.use("/taskly/users", userRouter);

{/* task  routes  */}
import taskRouter from "./routes/tasks.route.js";
app.use("/taskly/tasks", taskRouter);

export default app;