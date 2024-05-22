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
            values: ["level 1", "level 2", "level 3","level 4","level 5", "level 6", "level 7", "level 8", "level 9"],
            message: "{values} is not a valid course category",
        },
    },
   
}
);

const course = model('course', courseSchema);
export default course;