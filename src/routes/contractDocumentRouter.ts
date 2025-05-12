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

const contractDocumentRouter = Router();

contractDocumentRouter.post(
  "/upload",
  upload.array("file", 5),
  authMiddleware,
  asyncHandler(uploadContractDocumentsHandler)
);
contractDocumentRouter.get(
  "/",
  authMiddleware,
  asyncHandler(getAllContractDocumentListHandler)
);
contractDocumentRouter.get(
  "/draft",
  authMiddleware,
  asyncHandler(getContractDraftListHandler)
);
contractDocumentRouter.get(
  "/:contractDocumentId/download",
  authMiddleware,
  asyncHandler(downloadContractDocHandler)
);

export default contractDocumentRouter;
