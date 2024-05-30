import instructorModel from "../model/instructor.model.js";
import { notfoundError, BadRequestError } from "../error/index.js";
import { validationResult } from "express-validator";
import asyncWrapper from "../middleware/async.js";


export const addNewInstructor = asyncWrapper(async (req, res, next) => {
    const errors = validationResult(req)
    
     if(!errors.isEmpty()){
         next(new BadRequestError(errors.array()[0].msg));
     }
         const newInstructor = await instructorModel.create(req.body)
        return  res.status(201).json(newInstructor); 
     
     
 });

 export const getAllInstructors =  async (req, res, next) => {
     try{
         const getInstructors = await instructorModel.find();
         if(getInstructors){
             return res.status(200).json({
                 size: getInstructors.length,
                 getInstructors
             })
         }
         
     }catch (error){
         next(error);  
     }
 }

 export const getInstructorById = async (req, res, next) => {
     try{
         const foundInstructor = await instructorModel.findById(req.params.id)
         if (!foundInstructor) {
             return next(new notfoundError(`Instructor not found`))
         }
         
           return  res.status(200).json(foundInstructor)
         }
     catch (error) {
         next(error);
         
       }
 }


   export const updateInstructor = async(req, res, next) => {
     try {
         const updatedInstructor = await instructorModel.findByIdAndUpdate(req.params.id, req.body,{set:true});
            if(!updatedInstructor) {
             return next(new notfoundError(`Instructor not found`));
            }
            return  res.status(200).json(updatedInstructor)
         }
     catch (error) {
         next(error);
     }

 }
 export const deleteInstructor = async(req, res, next) => {
     const id =req.params.id;
        
     try {
         const deletedInstructor = await instructorModel.findByIdAndDelete(id);
           return  res.status(200).json({ message : 'Deleted instructor'})
         }
         
      catch (error) {
         next(error)
     }

 }
