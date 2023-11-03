import express from "express";
import dbConnect from "./db/dbConnection.js"
import dotenv from 'dotenv';
dotenv.config();
import cors from "cors";
const app = express();
import authRoutes from "./routes/auth.js"
app.use(express.json())
app.use(cors({
    origin: "http://localhost:5173"
}))


app.listen(process.env.PORT)
dbConnect()
app.use('/auth',authRoutes)


// Server Error handling
app.use((err,req,res,next)=>{

    const statusCode = err.statusCode || 501;
    const message = err.message || 'Internal Server Error';

    res.status(statusCode).json({
        success:"false",
        message,
        statusCode
    })

})