import multer from "multer";
import path from "path";
import fs from "fs";

const uploadDir = path.join(__dirname, "../../docUploads/contractDocument");

if (!fs.existsSync(uploadDir)) {
  console.log("디렉터리 없음");
  fs.mkdirSync(uploadDir, { recursive: true });
  console.log("디렉토리 생성완료");
} else {
  console.log("디렉토리 존재함.");
}

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, uploadDir);
  },
  filename: function (req, file, cb) {
    const ext = path.extname(file.originalname);
    const baseName = path.basename(file.originalname, ext);
    const timestamp = Date.now();
    const fileName = `${baseName}-${timestamp}${ext}`;
    cb(null, fileName);
  },
});

export const upload = multer({ storage });
