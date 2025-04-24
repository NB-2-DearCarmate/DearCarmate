import { Request } from "express";
import { Multer } from "multer";

export interface MulterRequest extends Request {
  files: Express.Multer.File[];
}
