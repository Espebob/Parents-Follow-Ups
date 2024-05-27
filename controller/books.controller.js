 // Ensure the path is correct
import { NotFoundError, BadRequestError } from "../error/index.js";
import { validationResult } from "express-validator";
import asyncWrapper from "../middleware/async.js";
import cloudinary from "../utils/cloudinary.js";
import bookModel from "../model/books.model.js";

export const test = (req, res, next) => {
    res.send('Hello ');
};

export const addNewBook = asyncWrapper(async (req, res, next) => {
    const result = await cloudinary.uploader.upload(req.file.path, function (err, result) {
        if (err) {
            console.log(err.message);
            return res.status(500).json({ message: "error" });
        }
    });
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        next(new BadRequestError(errors.array()[0].msg));
    }
    const addBook = await bookModel.create({
        bookName: req.body.bookName,
        description: req.body.description,
        writerName: req.body.writerName,
        image: {
            url: result.url
        }
    });
    return res.status(201).json(addBook);
});

export const getAllBooks = async (req, res, next) => {
    try {
        const books = await bookModel.find();
        if (books) {
            return res.status(200).json({
                size: books.length,
                books
            });
        }
    } catch (error) {
        next(error);
    }
};

export const getBookById = async (req, res, next) => {
    try {
        const foundBook = await bookModel.findById(req.params.id);
        if (!foundBook) {
            return next(new NotFoundError(`Book not found`));
        }
        return res.status(200).json(foundBook);
    } catch (error) {
        next(error);
    }
};

export const findBooksByCategory = async (req, res, next) => {
    const bookCategory = req.params.category;
    try {
        const foundBooks = await bookModel.find({ category: bookCategory });
        return res.status(200).json({
            size: foundBooks.length,
            foundBooks
        });
    } catch (error) {
        next(error);
    }
};

export const updateBook = async (req, res, next) => {
    try {
        const updatedBook = await bookModel.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!updatedBook) {
            return next(new NotFoundError(`Book not found`));
        }
        return res.status(200).json(updatedBook);
    } catch (error) {
        next(error);
    }
};

export const deleteBook = async (req, res, next) => {
    const id = req.params.id;
    try {
        const deletedBook = await bookModel.findByIdAndDelete(id);
        return res.status(200).json({ message: 'Book is deleted' });
    } catch (error) {
        next(error);
    }
};
