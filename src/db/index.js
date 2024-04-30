
import mongoose from "mongoose";
import { DB_Name } from "../constants.js";



const dbConnect=async()=>{
    try {
        const connectionInstance = await mongoose.connect(`${process.env.MONGODB_URL}/${DB_Name}`)
        console.log(`\n MongoDb is connected!! DB Host:${connectionInstance.connection.host}  `);
        // this line shows that the mongodb is connected to the host of the connection instance
    } catch (error) {
        console.error("MongoDb connection failed:",error);
        process.exit(1)
    }
}

export default dbConnect