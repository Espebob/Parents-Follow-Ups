import {model, Schema} from "mongoose";

const courseSchema = new Schema (
    
    {
    tittle:{
        type: String,
        required: true,
      
         },

    description: {
        type: String,
        required: false
    },
     
    instructor:{
         type: String,
         required: true,
    },

    category: {
        type: String,
        required: true,
        enum: {
            values: ["Grade 1", "Grade 2", "Grade 3","Grade 4","Grade 5", "Grade 6", "Grade 7", "Grade 8", "Grade 9"],
            message: "{values} is not a valid course category",
        },
    },
   
}
);

const course = model('course', courseSchema);
export default course;