import mongoose from "mongoose";

const contactSchema = new mongoose.Schema({
    fullName: {
      type: String,
      required: true
    },
    email: {
      type: String,
      required: true
    },
    subject:{
      type: String,
      required: false
    },
    message: {
      type: String,
      required: true
    }
  }, {
    timestamps: true
  });
  
 const contactModel=new mongoose.model('contact',contactSchema)

 export default contactModel;
