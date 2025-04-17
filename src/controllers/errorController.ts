import { StructError } from "superstruct";
import BadRequestError from "../errors/BadRequestError";
import { ErrorRequestHandler, RequestHandler } from "express";
import NotFoundError from "../errors/NotFoundError";
import ForbiddenError from "../errors/ForbiddenError";
import UnauthorizedError from "../errors/UnauthorizedError";

export const defaultNotFountHandler: RequestHandler = (req, res, next) => {
  res.status(404).send({ message: "해당 경로를 찾을 수 없습니다." });
};

export const globalErrorHandler: ErrorRequestHandler = (
  err,
  req,
  res,
  next
) => {
  if (err instanceof StructError || err instanceof BadRequestError) {
    res.status(400).send({ message: err.message });
  }

  if (err instanceof SyntaxError && err.message.includes("JSON")) {
    res.status(400).send({ message: "유효하지 않은 JSON입니다." });
  }

  if (err.code) {
    console.error("데이터 처리 오류:", err);
    res.status(500).send({ message: "데이터 처리에 실패하였습니다." });
  }

  if (err instanceof NotFoundError) {
    res.status(404).send({ message: err.message });
  }

  if (err instanceof UnauthorizedError) {
    res.status(401).send({ message: err.message });
  }
  if (err instanceof ForbiddenError) {
    res.status(403).send({ message: err.message });
  }

  res.status(500).send({ message: "서버에 문제가 발생하였습니다." });
};
