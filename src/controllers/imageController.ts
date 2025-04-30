import multer, { FileFilterCallback } from "multer";
import { Request, Response } from "express";
import path from "path";
import BadRequestError from "../errors/BadRequestError";

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "photos");
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + path.extname(file.originalname));
  },
});

const fileFilter = (
  req: Request,
  file: Express.Multer.File,
  cb: FileFilterCallback
) => {
  const allowedTypes = ["image/jpeg", "image/png", "image/jpg"];

  if (!allowedTypes.includes(file.mimetype)) {
    const err = new BadRequestError("이미지 파일을 업로드 바랍니다.");
    return cb(err);
  }

  return cb(null, true);
};

const upload = multer({
  storage,
  fileFilter,
  limits: { fileSize: 10 * 1024 * 1024 },
});

const imageUpload = (req: Request, res: Response): void => {
  const files = req.files as Express.Multer.File[] | undefined;

  if (files && files.length > 0) {
    const filePaths = files.map((file) => `/photos/${file.filename}`);
    res.status(200).json({ urls: filePaths });
  }

  res.status(400).send({ message: "업로드 된 파일이 없습니다." });
};

export { upload, imageUpload };
