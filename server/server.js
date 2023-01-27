import * as dotenv from "dotenv";
dotenv.config();
import express from "express";
import cors from "cors";
import connectDB from "./config/db.js";
import errorHandler from "./middleware/errorHandler.js";
import authRoute from "./routes/authRoute.js";
import userRoute from "./routes/userRoute.js";
import fileRoute from "./routes/fileRoute.js";
import { corsOptions } from "./config/cors.js";
const app = express();

connectDB();
app.use(cors(corsOptions));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));
app.use("/files", express.static("files"));

// Apis

app.use("/api/auth", authRoute);
app.use("/api/user", userRoute);
app.use("/api/files", fileRoute);

//error handler
app.use(errorHandler);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`server is 🚀 on port ${PORT}`));
