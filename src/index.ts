import express from 'express'
import dotenv from 'dotenv'
import appRouter from './routers/app-router'

dotenv.config()

const app = express()
const PORT = process.env.PORT


app.use('/',appRouter)



app.listen(PORT,() => console.log(`listening at http://localhost:${PORT}`))

//module.exports = app