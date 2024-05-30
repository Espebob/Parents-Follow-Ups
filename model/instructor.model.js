import { model, Schema } from "mongoose";

const instructorSchema = new Schema({
    
    instructorName:{
        type:String,
        required:true,
       
    },

    instructorEmail:{
        type: String,
        required: true
    },
     
    instructorContact:{
        type:String,
        required: true
    },


    course:{
        type:String,
        required:true,
        
    }

});
 
const instructors =model('Instructors', instructorSchema)
export default instructors;

