import express from "express";
const courseRoute = express.Router();
import { test, addNewCourse, getAllCourses, getCourseById, findCourseCategory, updateCourse, deleteCourse} from "../controller/course.controller.js";
import { addCourseValidation, testValidation } from "../utils/validation.js";
courseRoute.post("/test", testValidation, test);
courseRoute.post("/add", addCourseValidation, addNewCourse);
courseRoute.get("/list", getAllCourses);
courseRoute.get("/get/:id", getCourseById);
courseRoute.get("/get", findCourseCategory);
courseRoute.put("/update/:id", updateCourse);
courseRoute.delete("/delete/:id", deleteCourse);

export default courseRoute;