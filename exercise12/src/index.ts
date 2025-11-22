import express from 'express'
import loginRoute from './routes/login.route'


const app=express()


app.use(express.json())

app.use('/login',loginRoute)

app.listen(5000,()=>{
    console.log('server is starting port 5000')
})