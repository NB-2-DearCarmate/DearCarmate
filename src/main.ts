import express from "express";
import cors from "cors";
import SwaggerUi from "swagger-ui-express";
import companiesRouter from "./routes/companiesRouter";
import authRoutes from "./routes/authRouter";
import { PORT } from "./lib/constance";
import { specs } from "./config/config";
import { defaultNotFountHandler } from "./controllers/errorController";
import { globalErrorHandler } from "./controllers/errorController";
import carsRouter from "./routes/carsRouter";
import customer from "./routes/customersRouter";
import UserController from "./routes/usersRouter";
import login from "./routes/authRouter";

const app = express();

app.use(express.json());
app.use(cors());

app.use("/api-docs", SwaggerUi.serve, SwaggerUi.setup(specs));

app.use("/companies", companiesRouter);
app.use("/cars", carsRouter);
app.use("/auth", authRoutes);
app.use("/customers", customer);
app.use("/users", UserController);
app.use(defaultNotFountHandler);
app.use(globalErrorHandler);

app.listen(PORT, () => {
  console.log(`server starting ${PORT}`);
});
