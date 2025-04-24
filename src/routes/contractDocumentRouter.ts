import { Router } from "express";
import {
  getAllContractDocumentListHandler,
  getContractDraftListHandler,
  uploadContractDocumentsHandler,
} from "../controllers/contractDocumentController";
import authMiddleware from "../middlewares/authMiddleware";
import multer from "multer";
const upload = multer({ dest: "uploads/" });

const router = Router();

router.post(
  "/upload",
  upload.array("contractDocument", 10),
  uploadContractDocumentsHandler
);
router.get("/", authMiddleware, getAllContractDocumentListHandler);
router.get("/draft", authMiddleware, getContractDraftListHandler);

export default router;
