import { Router } from "express";
import { upload } from "../lib/docUploads";
import {
  downloadContractDocHandler,
  getAllContractDocumentListHandler,
  getContractDraftListHandler,
  uploadContractDocumentsHandler,
} from "../controllers/contractDocumentController";
import authMiddleware from "../middlewares/authMiddleware";

const router = Router();

router.post(
  "/upload",
  (req, res, next) => {
    console.log("파일요청들어옴");
    console.log("req.files:", req.files);
    next();
  },
  upload.array("contractDocument", 5),
  authMiddleware,
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
