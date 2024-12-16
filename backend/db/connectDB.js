import mongoose from "mongoose";

export const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("MongoDb Connected Successfully");
  } catch (error) {
    console.log("Error connecting to MongoDb", error.message);
    process.exit(1); // 1 is Failure
  }
};
