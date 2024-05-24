import express from 'express';
import mongoose from 'mongoose';
import router from './route/index.js';
import errorHandler from './middleware/errorhandler.js';
import dotenv from 'dotenv';
import documentation from "./doc/swagger.json" assert{type:"json"};
import swaggerUi from "swagger-ui-express";
import cors from "cors"

const corsOptions ={
    allowedHeaders: ["Authorization", "Content-Type" ],
    methods: ["GET", "POST", "PUT", "UPDATE", "DELETE"],
    origin:"*",
};

dotenv.config()



const app = express();
app.use(cors({
    origin: "*",
        credentials: true,
        allowedHeaders: ['Content-Type', 'Authorization'],
        methods: ['GET', 'POST', 'PUT', 'PATCH', 'DELETE', 'OPTIONS'],
        preflightContinue: false,
        optionsSuccessStatus: 204,
}));
app.use(express.json());
app.use("/api_docs",swaggerUi.serve, swaggerUi.setup(documentation))
app.use('/followup',router);
mongoose.connect(`${process.env.db}`)
.then(()=>
{
    console.log('connected to the database');
})
.catch(err=>
    {
        console.log(err);
    }
)
app.listen(process.env.PORT,()=>
{
    console.log(`server is running on port ${process.env.PORT}`);
})
app.use(errorHandler)