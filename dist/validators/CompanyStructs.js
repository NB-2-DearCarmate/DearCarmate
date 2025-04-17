"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CompanyStruct = void 0;
const superstruct_1 = require("superstruct");
exports.CompanyStruct = (0, superstruct_1.object)({
    name: (0, superstruct_1.string)(),
    businessNumber: (0, superstruct_1.refine)((0, superstruct_1.string)(), "businessNumber", (value) => /^\d{3}-\d{2}-\d{5}$/.test(value)),
    ceoName: (0, superstruct_1.string)(),
    address: (0, superstruct_1.string)(),
    phone: (0, superstruct_1.string)(),
});
