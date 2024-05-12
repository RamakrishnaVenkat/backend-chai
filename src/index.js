// require('dotenv').config() this can also be done but it disrupts the codes consistency
import dotenv from "dotenv";
// import mongoose from "mongoose";
// import { DB_Name } from "./constants";
// import express from "express"
import dbConnect from "./db/index.js";

import { app } from "./app.js";


dotenv.config({
    path:"./env"
})

dbConnect()
.then(()=>{
    app.listen(process.env.PORT || 8000,()=>{
        console.log("the server is running in the PORT",`${process.env.PORT}`);
    })
    app.on("error",()=>{
        console.log("the server has some error");
        throw Error;
    })

})
.catch((error)=>{
    console.log("the connection is failed",error);
})

/*const app=express()




// the code below is a iffie function and in this we have added the ; before the function to avoid errors and this is the older method
// the production  grade is above
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