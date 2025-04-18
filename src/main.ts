import express from "express";
import cors from "cors";
import { PORT } from "./lib/constance";

const app = express();

app.use(express.json());
app.use(cors());

app.listen(PORT, () => {
  console.log(`server starting ${PORT}`);
});
