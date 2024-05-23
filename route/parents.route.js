import express from "express";
const parentsRoute = express.Router();
import { addNewParent, getAllParents, getParentById, updateParent, deleteParent, findParentByCategory } from "../controller/parents.controller.js";
import { addNewParentValidation } from "../utils/validation.js";

parentsRoute.post("/add", addNewParentValidation,addNewParent );
parentsRoute.get("/list", getAllParents);
parentsRoute.get("/get/:id", getParentById);
parentsRoute.get("/get/:name", findParentByCategory);
parentsRoute.put("/update/:id", updateParent);
parentsRoute.delete("/delete/:id", deleteParent);

export default parentsRoute;