import express from 'express'
import dotenv from 'dotenv'
import path from 'path'
import appRouter from './routers/app-router'

dotenv.config()

const app = express()
const PORT = process.env.PORT

// - Middleware
app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(express.static(path.join(__dirname,'public')))

app.use('/',appRouter)



app.listen(PORT,() => console.log(`listening at http://localhost:${PORT}`))

//module.exports = app