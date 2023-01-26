import mongoose from "mongoose";

mongoose.set("strictQuery", true);
const connectDB = async () => {
  try {
    const connect = await mongoose.connect(process.env.DATABASE_URL);
    console.log("database connected");
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};

export default connectDB;
