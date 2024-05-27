import express from "express";
import {  addNewBook, getAllBooks, getBookById, findBooksByCategory, updateBook, deleteBook } from "../controller/books.controller.js"; // Verify this path
import upload from "../middleware/multer.js";
const bookRoute = express.Router();


bookRoute.post("/add", upload.single('image'), addNewBook);
bookRoute.get("/list", getAllBooks);
bookRoute.get("/get/:id", getBookById);
bookRoute.get("/getByCategory/:category", findBooksByCategory);
bookRoute.put("/update/:id", updateBook);
bookRoute.delete("/delete/:id", deleteBook);

export default bookRoute;
