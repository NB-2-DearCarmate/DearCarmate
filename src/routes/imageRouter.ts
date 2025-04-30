import express from "express";
import { upload, imageUpload } from "../controllers/imageController";
import { asyncHandler } from "../lib/asyncHandler";

const imageRouter = express.Router();

imageRouter.post(
  "/upload",
  upload.array("photo", 10),
  asyncHandler(imageUpload)
);

export default imageRouter;
