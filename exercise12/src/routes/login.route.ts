import express, { Request, Response } from 'express'
import loginController from '../controllers/login.controllers'

const loginRoute =express.Router()


loginRoute.get('/',loginController)
interface ProductQuery {
    pageX:number,
    pageY:number
}
loginRoute.get('/query',(req:Request<{},{},{},ProductQuery>,res:Response)=>{
  const {pageX,pageY}=req.query
  res.status(201).json({
    message:`pages ${pageX} and ${pageY}`
  })
})
type Params={
    id:number
}
type Product ={
    name:string,
    price:number
}
loginRoute.put('/product/:id',(req:Request<Params,{},Product>,res:Response)=>{
 const {id}=req.params
 const {name,price}=req.body
 res.status(201).json({
    message:`yuo id ${id} and your product name ${name}, product price ${price}`
 })
})

export default loginRoute