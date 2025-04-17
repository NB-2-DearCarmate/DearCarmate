"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.globalErrorHandler = exports.defaultNotFountHandler = void 0;
const superstruct_1 = require("superstruct");
const BadRequestError_1 = __importDefault(require("../errors/BadRequestError"));
const NotFoundError_1 = __importDefault(require("../errors/NotFoundError"));
const ForbiddenError_1 = __importDefault(require("../errors/ForbiddenError"));
const UnauthorizedError_1 = __importDefault(require("../errors/UnauthorizedError"));
const defaultNotFountHandler = (req, res, next) => {
    res.status(404).send({ message: "해당 경로를 찾을 수 없습니다." });
};
exports.defaultNotFountHandler = defaultNotFountHandler;
const globalErrorHandler = (err, req, res, next) => {
    if (err instanceof superstruct_1.StructError || err instanceof BadRequestError_1.default) {
        res.status(400).send({ message: err.message });
    }
    if (err instanceof SyntaxError && err.message.includes("JSON")) {
        res.status(400).send({ message: "유효하지 않은 JSON입니다." });
    }
    if (err.code) {
        console.error("데이터 처리 오류:", err);
        res.status(500).send({ message: "데이터 처리에 실패하였습니다." });
    }
    if (err instanceof NotFoundError_1.default) {
        res.status(404).send({ message: err.message });
    }
    if (err instanceof UnauthorizedError_1.default) {
        res.status(401).send({ message: err.message });
    }
    if (err instanceof ForbiddenError_1.default) {
        res.status(403).send({ message: err.message });
    }
    res.status(500).send({ message: "서버에 문제가 발생하였습니다." });
};
exports.globalErrorHandler = globalErrorHandler;
