import { model, Schema } from "mongoose";

const Schema = new Schema({
    
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
    childLevel:{
        type:String,
        required:true
    },

    category: {
        type: String,
        required: true,
        enum: {
            values: ["level 1", "level 2", "level 3","level 4","level 5", "level 6", "level 7", "level 8", "level 9"],
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

