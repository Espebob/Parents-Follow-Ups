import mongoose from "mongoose";
const schema=mongoose.Schema

const userSchema=new schema({
    name:{
        type:String,
        required:true,
        unique:true
    },
    email:{
        type:String,
        required:true,
        unique:true,
    },
    password:{
        type:String,
        required:true
    },

    confirmPassword:{
        type:String,
        required:false
    },

    role:{
        type:String,
        required:true,
        enum:{
            values:['parent', 'instructor'],
            message:'Role must be parent or instructor'
        },
        default:'instructor'
    },
    
    otp:{
        type:Number,
        required:true
    },
    otpExpires:{
        type:Date,
        required:false
    },
    verified:{
        type:Boolean,
        required:true,
        default:false
    }
})

const UserModel=mongoose.model("User",userSchema);

export default UserModel;