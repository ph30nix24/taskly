import mongoose from "mongoose";

const connectDB = async () => {
    try {
        const connect = await mongoose.connect(`${process.env.MONGO_URI}/taskly`);
        console.log(`MongoDB Connected: ${connect.connection.host}`);
    }
    catch (error) {
        console.log("Error while connecting to MongoDB", error)
        process.exit(1)
    }
}

export default connectDB