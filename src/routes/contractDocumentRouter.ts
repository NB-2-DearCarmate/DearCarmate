import { Router } from "express";
import { upload } from "../lib/docUploads";
import {
  downloadContractDocHandler,
  getAllContractDocumentListHandler,
  getContractDraftListHandler,
  uploadContractDocumentsHandler,
} from "../controllers/contractDocumentController";
import authMiddleware from "../middlewares/authMiddleware";
import multer from "multer";

const router = Router();

router.post(
  "/upload",
  upload.array("contractDocument"),
  uploadContractDocumentsHandler
);
router.get("/", authMiddleware, getAllContractDocumentListHandler);
router.get("/draft", authMiddleware, getContractDraftListHandler);
router.get(
  "/:contractDocumentId/download",
  authMiddleware,
  downloadContractDocHandler
);

export default router;
