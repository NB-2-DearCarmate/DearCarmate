"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CustomerStruct = void 0;
const superstruct_1 = require("superstruct");
exports.CustomerStruct = (0, superstruct_1.object)({
    name: (0, superstruct_1.string)(),
    contact: (0, superstruct_1.string)(),
    email: (0, superstruct_1.refine)((0, superstruct_1.string)(), "email", (value) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)),
    birthDate: (0, superstruct_1.optional)((0, superstruct_1.string)()),
    gender: (0, superstruct_1.optional)((0, superstruct_1.enums)(["male", "female"])),
});
