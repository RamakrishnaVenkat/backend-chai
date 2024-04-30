// require('dotenv').config() this can also be done but it disrupts the codes consistency
import dotenv from "dotenv";
// import mongoose from "mongoose";
// import { DB_Name } from "./constants";
// import express from "express"
import dbConnect from "./db/index.js";


dotenv.config({
    path:"./env"
})

dbConnect()

/*const app=express()




// the code below is a iffie function and in this we have added the ; before the function to avoid errors
;(async ()=>{
    try {
        await mongoose.connect(`${process.env.MONGODB_URL}/${DB_Name}`)//in this we have to use the name of the db as well
        app.on("error",()=>{
            console.log("err",error);
            throw error;
        })
    } catch (error) {
        console.error("ERROR", error)
        return error;
    }
})()
*/