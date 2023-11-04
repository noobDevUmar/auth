import express from "express";
import dbConnect from "./db/dbConnection.js"
import dotenv from 'dotenv';
dotenv.config();
import cors from "cors";
const app = express();
import authRoutes from "./routes/auth.js"
app.use(express.json())
import UserModel from "./models/UserModel.js"
import CookieParser from "cookie-parser"
app.use(CookieParser())
import jwt from "jsonwebtoken"
app.use(cors())


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

app.get('/profile', async(req, res) => {

  
    const token = req.headers.authorization.split(' ')[1];
    console.log(token);
    if (token) {
    //   jwt.verify(token, process.env.secret, {}, async (err, usertoken) => {
    //     if (err) throw err;
    //     const {  email, _id,username} = await UserModel.findById(usertoken.id);
  
    //     res.json({  email, _id,username });
    //   });
      const verification = jwt.verify(token,process.env.secret)
      if(!verification) throw console.error("error");

      const {email,_id,username} = await UserModel.findById(usertoken.id);
      res.json({  email, _id,username });
    } else {
      res.json(null);
    }
  });