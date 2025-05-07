import { Router } from "express";
import { upload } from "../lib/docUploads";
import {
  downloadContractDocHandler,
  getAllContractDocumentListHandler,
  getContractDraftListHandler,
  uploadContractDocumentsHandler,
} from "../controllers/contractDocumentController";
import authMiddleware from "../middlewares/authMiddleware";
import { asyncHandler } from "../lib/asyncHandler";

const router = Router();

router.post(
  "/upload",
  upload.array("contractDocument", 5),
  authMiddleware,
  asyncHandler(uploadContractDocumentsHandler)
);
router.get(
  "/",
  authMiddleware,
  asyncHandler(getAllContractDocumentListHandler)
);
router.get("/draft", authMiddleware, asyncHandler(getContractDraftListHandler));
router.get(
  "/:contractDocumentId/download",
  authMiddleware,
  asyncHandler(downloadContractDocHandler)
);

export default router;
