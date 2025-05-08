import { Customer } from "@prisma/client";

export type SaveFileInfo = {
  fileName: string;
  filePath: string;
  fileSize: number;
};
