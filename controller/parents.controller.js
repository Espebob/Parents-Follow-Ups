import parentsModel from "../model/parents.model.js";
//import { NotFoundError, BadRequestError } from "../error/index.js";
import { validationResult } from "express-validator";
import asyncWrapper from "../middleware/async.js";


export const addNewParent = asyncWrapper(async (req, res, next) => {
    const errors = validationResult(req)
    
     if(!errors.isEmpty()){
         next(new BadRequestError(errors.array()[0].msg));
     }
         const newParent = await parentsModel.create(req.body)
        return  res.status(201).json(newParent); 
     
     
 });

 export const getAllParents =  async (req, res, next) => {
     try{
         const getParents = await parentsModel.find();
         if(getParents){
             return res.status(200).json({
                 size: getParents.length,
                 getParents
             })
         }
         
     }catch (error){
         next(error);  
     }
 }

 export const getParentById = async (req, res, next) => {
     try{
         const foundParent = await parentsModel.findById(req.params.id)
         if (!foundParent) {
             return next(new NotFoundError(`Parent not found`))
         }
         
           return  res.status(200).json(foundParent)
         }
     catch (error) {
         next(error);
         
       }
 }

 export const findParentByCategory = async (req, res, next) => {
     const courseCtegory = req.params.category;
     
     try {
         const foundParent = await parentsModel.find({category: courseCategory});
         return res.status(200).json({
             size: foundParent.length,
             foundParent
         });
     } catch (error) {
         next(error);
     }
 }
   export const updateParent = async(req, res, next) => {
     try {
         const updatedParent = await parentsModel.findByIdAndUpdate(req.params.id, req.body,{set:true});
            if(!updatedParent) {
             return next(new NotFoundError(`Parent not found`));
            }
            return  res.status(200).json(updatedParent)
         }
     catch (error) {
         next(error);
     }

 }
 export const deleteParent = async(req, res, next) => {
     const id =req.params.id;
        
     try {
         const deletedParent = await parentsModel.findByIdAndDelete(id);
           return  res.status(200).json({ message : 'Deleted parent'})
         }
         
      catch (error) {
         next(error)
     }

 }
