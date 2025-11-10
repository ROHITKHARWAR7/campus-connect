import mongoose from "mongoose";
const connectDb = async()=>{
    const mongoURI = process.env.MONGO_URI;
    try {
        await mongoose.connect(mongoURI as string);
        console.log("Connected to MongoDB");
    }
    catch(error){
        console.log("Error connecting to database:", error);
    }

}
export default connectDb;