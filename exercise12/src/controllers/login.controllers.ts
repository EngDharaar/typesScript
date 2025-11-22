import {Response,Request} from 'express'
import { loginType } from '../types/liging.types'
const loginController=(req:Request<{},{},loginType>,res:Response,)=>{
 const {email,password}=req.body
 if(!email || !password){
    res.status(400).json({
        message:'email and password are require'
    })
 }
 res.status(201).json({
    message:'login are successfully'
 })
}
export default loginController