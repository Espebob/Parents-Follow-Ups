import express from "express";
import { addNewContact, getAllContacts, getContactById, updateContact, deleteContact } from "../controller/contactus.controller.js"; // Verify this path

const contactRoute = express.Router();

contactRoute.post("/add", addNewContact);
contactRoute.get("/list", getAllContacts);
contactRoute.get("/get/:id", getContactById);
contactRoute.put("/update/:id", updateContact);
contactRoute.delete("/delete/:id", deleteContact);

export default contactRoute;
