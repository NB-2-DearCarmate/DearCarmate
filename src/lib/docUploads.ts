import multer from "multer";
import path from "path";
import fs from "fs";

const uploadDir = "uploads/contractDocument";

if (!fs.existsSync(uploadDir)) {
  fs.mkdirSync(uploadDir), { recursive: true };
}

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "uploads/contractDocument");
  },
  filename: function (req, file, cb) {
    const ext = path.extname(file.originalname); // 확장자 추출
    const baseName = path.basename(file.originalname, ext); // 확장자 제외한 파일 이름
    const timestamp = Date.now(); // 현재 타임스탬프
    const fileName = `${baseName}-${timestamp}${ext}`; // 파일명 + 타임스탬프
    cb(null, fileName);
  },
});

export const upload = multer({ storage });
