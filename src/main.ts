import express from "express";
import cors from "cors";
import path from "path";
import YAML from "yamljs";
import SwaggerUi from "swagger-ui-express";
import companiesRouter from "./routes/companiesRouter";
import authRoutes from "./routes/authRouter";
import { PORT } from "./lib/constance";
import { defaultNotFountHandler } from "./controllers/errorController";
import { globalErrorHandler } from "./controllers/errorController";
import carsRouter from "./routes/carsRouter";
import userRouter from "./routes/usersRouter";
import customer from "./routes/customersRouter";
import UserController from "./routes/usersRouter";
import contractDocumentRouter from "./routes/contractDocumentRouter";
import contractRouter from "./routes/contractRouter";
import login from "./routes/authRouter";
import imageRouter from "./routes/imageRouter";
import dashboardRouter from "./routes/dashboardRouter";

const app = express();
const swaggerSpec = YAML.load(path.join(__dirname, "../dist/openapi.yaml"));

app.use(express.json());
app.use(cors());

app.use("/api-docs", SwaggerUi.serve, SwaggerUi.setup(swaggerSpec));

app.use("/companies", companiesRouter);
app.use("/cars", carsRouter);
app.use("/auth", authRoutes);
app.use("/users", userRouter);
app.use("/contracts", contractRouter);
app.use("/customers", customer);
app.use("/users", UserController);
app.use("/contractDocuments", contractDocumentRouter);
app.use("/uploads", express.static(path.resolve("uploads")));
app.use("/images", imageRouter);
app.use("/dashboard", dashboardRouter);

app.use(defaultNotFountHandler);
app.use(globalErrorHandler);
login;

app.listen(PORT, () => {
  console.log(`server starting ${PORT}`);
});
