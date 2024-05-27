

import {v2 as cloudinary} from 'cloudinary';
cloudinary.config({
  cloud_name: process.env.CLOUD_NAME || 'dcurjowwv',
  api_key: process.env.CLOUD_KEY || 348783573732576,
  api_secret: process.env.CLOUD_SECRET || 'tShxRsfoiaIIuRI7FZzNbaDVc5g' 
});
export default cloudinary;






