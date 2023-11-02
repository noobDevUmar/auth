import UserModel from "../models/UserModel.js"
import {ErrorHandling} from "../utils/CustomError.js"
export const signUp  = async (req,res,next)=>{
    const {username,password,email} = req.body

    try {
        // check if username already exists
       let check=  await UserModel.find({username})
       if(check.length>0) 
       {
         throw ErrorHandling(402,"User Already Exisists")
       }
       const user = await UserModel.create({ username,email,password })
       res.json({
        user
       })

    } catch (error) {
      next(error)
    }

}

