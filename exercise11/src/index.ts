import express from 'express'
import route from './routes/hellow.routes'

const app=express()
app.use(express.json())
app.use('/hellow',route)

app.listen(5000,()=>{
    console.log('server is starting port 500')
})