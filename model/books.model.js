import { model, Schema } from "mongoose";

const bookSchema = new Schema({
    bookName: {
        type: String,
        required: true,
        unique: true
    },
    description: {
        type: String,
        required: false
    },
    image: {
        url: {
            type: String
        }
    },
    writerName: {
        type: String,
        required: true
    }
});

const bookModel = model('Book', bookSchema);
export default bookModel;
