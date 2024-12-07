import express from "express";
import multer from "multer";
import { process } from "../controllers/transcriptionController.js";

const router = express.Router();

const upload = multer({
    storage: multer.memoryStorage(),
    limits: {
        fileSize: 100 * 1024 * 1024,
    }
});

router.post("/process", upload.single("file"), process);

export default router;