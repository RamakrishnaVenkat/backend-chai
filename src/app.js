import express from "express"
import cors from "cors"
import cookieParser from "cookie-parser"


const app=express()

app.use(cors({
    origin:process.env.CORS_ORIGIN,
    Credentials:true
}))
app.use(express.json({limit:"20kb"}))//this is used for the limit of the data that is used
app.use(express.urlencoded({extended:true,limit:"16kb"}))//this is used to encode the url hence obtained
app.use(express.static("public"))
app.use(cookieParser())

export {app}