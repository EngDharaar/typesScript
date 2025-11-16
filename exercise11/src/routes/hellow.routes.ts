import express from 'express'
import { sayHellow } from '../controllers/hellow.controllers'

const route=express.Router()

route.get('/',sayHellow)

export default route