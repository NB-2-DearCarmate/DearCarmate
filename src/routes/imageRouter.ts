import express from "express";
import { upload, imageUpload } from "../controllers/imageController";
import { asyncHandler } from "../lib/asyncHandler";

const imageRouter = express.Router();

imageRouter.post("/upload", upload.single("file"), asyncHandler(imageUpload));

export default imageRouter;
