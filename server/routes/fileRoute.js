import express from "express";
import { multerFile } from "../config/multer.js";
import {
  getAllFiles,
  uploadFile,
  downloadFile,
} from "../controllers/fileController.js";
import verifyToken from "../middleware/authMiddleware.js";
const router = express.Router();

router.use(verifyToken);
router.get("/", getAllFiles);
router.get("/:id", downloadFile);
router.post("/", multerFile.single("file"), uploadFile);

export default router;
