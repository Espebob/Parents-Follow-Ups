import CustomError from "./customError.js";
export class notfoundError extends CustomError {
    constructor(message) {
        super(message);
        this.statusCode = 404;
    }
}