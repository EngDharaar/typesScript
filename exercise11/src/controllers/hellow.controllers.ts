import {Request,Response} from 'express'

export const sayHellow=(req:Request,res:Response)=>{
const name=req.query.name
if(typeof name!=='string'){
    res.status(400).json({
        message:`name must start string`
    })
}
res.status(201).json({
    message:`good by${name}`
})
}