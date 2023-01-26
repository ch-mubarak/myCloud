import express from "express";
import { googleLogin, loginUser, registerUser } from "../controllers/authController.js";
const router = express.Router();

router.post("/login", loginUser);
router.post("/register", registerUser);
router.post("/google", googleLogin);

export default router;
