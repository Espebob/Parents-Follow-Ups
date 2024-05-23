import serviceModel from "../model/service.model.js";
import { validationResult } from "express-validator";
import asyncWrapper from "../middleware/async.js";
import { BadRequestError } from "../error/BadRequestError.js";
import { NotFoundError } from "../error/NotFoundError.js";

export const test = (req, res, next) => {
    res.send('hello');
}

   export const addNewCourse = asyncWrapper(async (req, res, next) => {
       const errors = validationResult(req)
       
        if(!errors.isEmpty()){
            next(new BadRequestError(errors.array()[0].msg));
        }
            const newCourse = await courseModel.create(req.body)
           return  res.status(201).json(newCourse); 
        
        
    });

    export const getAllCourses =  async (req, res, next) => {
        try{
            const getServices = await courseModel.find();
            if(getCourses){
                return res.status(200).json({
                    size: getServices.length,
                    getCourses
                })
            }
            
        }catch (error){
            next(error);  
        }
    }

    export const getCourseById = async (req, res, next) => {
        try{
            const foundCourse = await courseModel.findById(req.params.id)
            if (!foundCourse) {
                return next(new NotFoundError(`Course not found`))
            }
            
              return  res.status(200).json(foundCourse)
            }
        catch (error) {
            next(error);
            
          }
    }

    export const findCourseCategory = async (req, res, next) => {
        const courseCategory = req.params.category;
        
        try {
            const foundCourse = await courseModel.find({category: courseCategory});
            return res.status(200).json({
                size: foundCourse.length,
                foundCourse
            });
        } catch (error) {
            next(error);
        }
    }
      export const updateCourse = async(req, res, next) => {
        try {
            const updatedCourse = await courseModel.findByIdAndUpdate(req.params.id, req.body,{set:true});
               if(!updatedService) {
                return next(new NotFoundError(`Course not found`));
               }
               return  res.status(200).json(updatedCourse)
            }
        catch (error) {
            next(error);
        }

    }
    export const deleteCourse = async(req, res, next) => {
        const id =req.params.id;
           
        try {
            const deletedCourse = await courseModel.findByIdAndDelete(id);
              return  res.status(200).json({ message : 'Course is deleted'})
            }
            
         catch (error) {
            next(error)
        }

    }
