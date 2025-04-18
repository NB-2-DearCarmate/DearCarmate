import express from "express";
import cors from "cors";
import companiesRouter from "./routes/companiesRouter";
import { PORT } from "./lib/constance";
import { defaultNotFountHandler } from "./controllers/errorController";
import { globalErrorHandler } from "./controllers/errorController";

const app = express();

app.use(express.json());
app.use(cors());

app.use("/companies", companiesRouter);
app.use(defaultNotFountHandler);
app.use(globalErrorHandler);

app.listen(PORT, () => {
  console.log(`server starting ${PORT}`);
});
