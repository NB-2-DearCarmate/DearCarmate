import multer from "multer";
import path from "path";

// 파일 저장 경로 및 파일 이름 설정
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "uploads/"); // 업로드된 파일을 저장할 디렉토리
  },
  filename: (req, file, cb) => {
    const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9);
    cb(
      null,
      file.fieldname + "-" + uniqueSuffix + path.extname(file.originalname)
    );
  },
});

// CSV 파일만 업로드 허용, 파일 크기 제한
const upload = multer({
  storage: storage,
  limits: { fileSize: 50 * 1024 * 1024 }, // 50MB로 파일 크기 제한
  fileFilter: (req, file, cb) => {
    if (file.mimetype !== "text/csv") {
      return cb(new Error("CSV 파일만 업로드 가능합니다."));
    }
    cb(null, true);
  },
});

export default upload;
