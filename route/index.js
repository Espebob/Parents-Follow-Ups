import userRoute from "../route/userRoute.js";
import express from "express";
import courseRoute from "../route/course.route.js";

const route = express.Router();

route.use("/user", userRoute);
route.use("/course",courseRoute);

export default route;