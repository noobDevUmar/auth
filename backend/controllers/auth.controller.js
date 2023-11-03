import UserModel from "../models/UserModel.js"
import {ErrorHandling} from "../utils/CustomError.js"
import jwt from "jsonwebtoken"
import bcrypt from "bcrypt"
let  salt = bcrypt.genSaltSync(10)



export const signUp = async (req, res, next) => {
  const { username, password, email } = req.body;

  try {
    // check if username already exists
    let check = await UserModel.find({ username });
    let hashedpassword = bcrypt.hashSync(password, salt);

    const user = await UserModel.create({
      username,
      email,
      password: hashedpassword,
    });
    res.json({ success:"true", user});
  } catch (error) {
    next(error);
  }
};

export const signIn = async(req,res,next)=>{
   let { username,password }= req.body;
try {
  
   let validUser = await UserModel.findOne({email:username})
   if(!validUser) return next(ErrorHandling(401,"User not Found"))

   let validpassword = bcrypt.compareSync(password,validUser.password)
   if(!validpassword) return next(ErrorHandling(401,"passord did not matched"))

   // Generate a token 

  const token= jwt.sign({username,username:validUser.username},"mysecretkey");
  res.cookie('token',token).json(validUser).status(200)

} catch (error) {
  next(error)
}

  
}
