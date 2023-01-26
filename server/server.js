import * as dotenv from "dotenv";
dotenv.config();
import express from "express";
import cors from "cors";
import connectDB from "./config/db.js";
import errorHandler from "./middleware/errorHandler.js";
import authRoute from "./routes/authRoute.js";
import userRoute from "./routes/userRoute.js";
const app = express();

connectDB();
app.use(
  cors({
    origin: "*",
  })
);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Apis

app.use("/api/auth", authRoute);
app.use("/api/user", userRoute);

//error handler
app.use(errorHandler);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`server is 🚀 on port ${PORT}`));
