import express from "express";

const router = express.Router();

router.post("/process", async (req, res) => {
    res.status(200).send("Transcription processing...");
});

export default router;