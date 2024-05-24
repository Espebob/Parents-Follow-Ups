import { model, Schema } from "mongoose";

const parentsSchema = new Schema({
    
    parentName:{
        type:String,
        required:true,
       
    },

    parentEmail:{
        type: String,
        required: true
    },

    childName:{
        type:String,
        required:true,
        
    },

    category: {
        type: String,
        required: true,
        enum: {
            values: ["Grade 1", "Grade 2", "Grade 3","Grade 4","Grade 5", "Grade 6", "Grade 7", "Grade 8", "Grade 9"],
            message: "{values} is not a valid course category",
        },
    },

    parentContact:{
        type:String,
        required: true
    }

});
 
const parents =model('parents', parentsSchema)
export default parents;

