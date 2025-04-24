import { Router } from "express";
import { getAllContractDocumentListHandler } from "../controllers/contractDocumentController";
import authMiddleware from "../middlewares/authMiddleware";

const router = Router();

router.get("/", authMiddleware, getAllContractDocumentListHandler);

export default router;
