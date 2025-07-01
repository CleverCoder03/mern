import mongoose from "mongoose"
import dotenv from "dotenv"

dotenv.config()

export const connectToDb = async () => {
    try{
        await mongoose.connect(process.env.MONGO_URI)
        console.log("MONOGODB CONNECTED SUCCESSFULLY")
    } catch(err){
        console.error(err)
    }
}