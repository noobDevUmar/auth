import express from "express"
const router = express.Router()
import {signUp,signIn} from "../controllers/auth.controller.js"


router.post('/signup',signUp)
router.post('/login',signIn)



export default router