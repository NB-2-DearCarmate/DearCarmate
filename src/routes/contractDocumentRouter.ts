import { Router } from "express";
import {
  getAllContractDocumentListHandler,
  getContractDraftListHandler,
} from "../controllers/contractDocumentController";
import authMiddleware from "../middlewares/authMiddleware";

const router = Router();

router.post("/upload");
router.get("/", authMiddleware, getAllContractDocumentListHandler);
router.get("/draft", authMiddleware, getContractDraftListHandler);

export default router;
