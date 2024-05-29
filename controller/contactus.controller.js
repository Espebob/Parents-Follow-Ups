import { NotFoundError, BadRequestError } from "../error/index.js";
import { validationResult } from "express-validator";
import asyncWrapper from "../middleware/async.js";
import contactModel from "../model/contactus.model.js";

export const test = (req, res, next) => {
    res.send('Hello ');
};

export const addNewContact = asyncWrapper(async (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        next(new BadRequestError(errors.array()[0].msg));
    }
    const newContact = await contactModel.create({
        name: req.body.name,
        email: req.body.email,
        subject: req.body.subject,
        message: req.body.message
    });
    return res.status(201).json(newContact);
});

export const getAllContacts = async (req, res, next) => {
    try {
        const contacts = await contactModel.find();
        if (contacts) {
            return res.status(200).json({
                size: contacts.length,
                contacts
            });
        }
    } catch (error) {
        next(error);
    }
};

export const getContactById = async (req, res, next) => {
    try {
        const foundContact = await contactModel.findById(req.params.id);
        if (!foundContact) {
            return next(new NotFoundError(`Contact not found`));
        }
        return res.status(200).json(foundContact);
    } catch (error) {
        next(error);
    }
};

export const updateContact = async (req, res, next) => {
    try {
        const updatedContact = await contactModel.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!updatedContact) {
            return next(new NotFoundError(`Contact not found`));
        }
        return res.status(200).json(updatedContact);
    } catch (error) {
        next(error);
    }
};

export const deleteContact = async (req, res, next) => {
    const id = req.params.id;
    try {
        const deletedContact = await contactModel.findByIdAndDelete(id);
        return res.status(200).json({ message: 'Contact is deleted' });
    } catch (error) {
        next(error);
    }
};
