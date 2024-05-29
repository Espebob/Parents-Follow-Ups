
import express from "express";
import userRoute from "../route/userRoute.js";
import courseRoute from "../route/course.route.js";
import parentsRoute from "../route/parents.route.js";
import bookRoute from "./books.route.js";
import contactRoute from "./contactus.route.js";

const route = express.Router();

route.use("/user", userRoute);
route.use("/course", courseRoute);
route.use("/parents", parentsRoute);
route.use("/book",bookRoute);
route.use("/contactus",contactRoute);


export default route;