import { Router } from "express";
import { getContractList } from "../controllers/contractController";

const contractRouter = Router();

contractRouter.get("/", getContractList);
contractRouter.post("/", getContractList);
contractRouter.patch("/:id", getContractList);
contractRouter.delete("/:id", getContractList);

export default contractRouter;
