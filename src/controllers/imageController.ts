import multer from "multer";
import { Request, Response } from "express";
import path from "path";
import fs from "fs";
import { PORT } from "../lib/constance";
import BadRequestError from "../errors/BadRequestError";

const uploadFolder = path.resolve("public/photos");

if (!fs.existsSync(uploadFolder)) {
  fs.mkdirSync(uploadFolder, { recursive: true });
}

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, uploadFolder);
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + path.extname(file.originalname));
  },
});

const upload = multer({
  storage,
  fileFilter: (req, file, cb) => {
    const allowedTypes = ["image/jpeg", "image/png", "image/jpg"];
    if (!allowedTypes.includes(file.mimetype)) {
      const err = new BadRequestError("이미지 파일을 업로드 바랍니다.");
    }
    cb(null, true);
  },
  limits: { fileSize: 10 * 1024 * 1024 },
});

const imageUpload = (req: Request, res: Response): void => {
  const file = req.file as Express.Multer.File | undefined;

  if (file) {
    const filePaths = `http://localhost:${PORT}/photos/${file.filename}`;
    res.status(200).json({ imageUrl: filePaths });
    return;
  }

  res.status(400).send({ message: "업로드 된 파일이 없습니다." });
};

export { upload, imageUpload };
