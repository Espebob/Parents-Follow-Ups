import express from "express";
const instructorRoute = express.Router();
import { addNewInstructor, getAllInstructors, getInstructorById, updateInstructor, deleteInstructor} from "../controller/instructor.controller.js";
import { addNewInstructorValidation } from "../utils/validation.js";

instructorRoute.post("/add", addNewInstructorValidation,addNewInstructor );
instructorRoute.get("/list", getAllInstructors);
instructorRoute.get("/get/:id", getInstructorById);
instructorRoute.put("/update/:id", updateInstructor);
instructorRoute.delete("/delete/:id", deleteInstructor);

export default instructorRoute;