import mongoose from "mongoose";

const connectDB = async () => {
  try {
    await mongoose.connect("mongodb://127.0.0.1:27017/nextAppDataBase");
    console.log("Success: Connected to local MongoDB");
  } catch {
    console.log("Failure: Unconnected to local MongoDB");
    throw new Error();
  }
};

export default connectDB;
