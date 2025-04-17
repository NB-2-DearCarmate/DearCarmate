import express from "express";
import cors from "cors";
import companiesRouter from "./routes/companiesRouter";
import { PORT } from "./lib/constance";

const app = express();

app.use(express.json());
app.use(cors());

app.use("/companies", companiesRouter);

app.listen(PORT, () => {
  console.log(`server starting ${PORT}`);
});
