import UserModel from "../models/UserModel.js"
import {ErrorHandling} from "../utils/CustomError.js"
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
   let { email,password }= req.body;

   let validUser = await UserModel.findOne({email})
   if(!validUser) return next(ErrorHandling(401,"User not Found"))

   let validpassword = bcrypt.compareSync(password,validUser.password)
   if(!validpassword) return next(ErrorHandling(401,"passord did not matched"))

   res.json({
      message:
      "User Matched"
   })
}
