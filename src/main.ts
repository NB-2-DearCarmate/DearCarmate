import express from "express";
import cors from "cors";
// import companiesRouter from "./routes/companiesRouter";
import authRoutes from "./routes/authRouter";
import { PORT } from "./lib/constance";
import { defaultNotFountHandler } from "./controllers/errorController";
import { globalErrorHandler } from "./controllers/errorController";
import carsRouter from "./routes/carsRouter";
import userRouter from "./routes/usersRouter";
import contractRouter from "./routes/contractRouter";

const app = express();

app.use(express.json());
app.use(cors());

// app.use("/companies", companiesRouter);
app.use("/cars", carsRouter);
app.use("/auth", authRoutes);
app.use("/users", userRouter);
app.use("/contracts", contractRouter);
app.use(defaultNotFountHandler);
app.use(globalErrorHandler);

app.listen(PORT, () => {
  console.log(`server starting ${PORT}`);
});
