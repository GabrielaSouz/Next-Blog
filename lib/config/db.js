import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config()

export const ConnectDB = async () => {
    const uri = process.env.MONGODB_URI
    if(!uri) {
        throw new Error("Mongo_URI não esta definido no .env")
    }

    await mongoose.connect(uri)
    console.log("DB Connected")
}
