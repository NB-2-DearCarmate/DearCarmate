import SwaggerJsdoc from "swagger-jsdoc";

const options = {
  definition: {
    info: {
      title: "DearCarmate API",
      version: "1.0.0",
      description: "2team, dearCarmate api",
    },
    host: "localhost:3000",
    basepath: "../",
  },
  apis: ["./src/routes/*.ts", "./swagger/*"],
};
export const specs = SwaggerJsdoc(options);
