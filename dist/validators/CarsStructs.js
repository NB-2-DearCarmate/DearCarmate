"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateCarStruct = exports.GetCarListParamsStruct = exports.CarStruct = void 0;
const superstruct_1 = require("superstruct");
const CommonStruct_1 = require("./CommonStruct");
exports.CarStruct = (0, superstruct_1.object)({
    carNumber: (0, superstruct_1.nonempty)((0, superstruct_1.string)()),
    manufacturer: (0, superstruct_1.nonempty)((0, superstruct_1.string)()),
    model: (0, superstruct_1.nonempty)((0, superstruct_1.string)()),
    manufacturingYear: (0, superstruct_1.min)((0, superstruct_1.number)(), 1990),
    mileage: (0, superstruct_1.min)((0, superstruct_1.number)(), 0),
    price: (0, superstruct_1.min)((0, superstruct_1.number)(), 0),
    accidentCount: (0, superstruct_1.min)((0, superstruct_1.number)(), 0),
    explanation: (0, superstruct_1.nonempty)((0, superstruct_1.string)()),
    accidentDetails: (0, superstruct_1.nonempty)((0, superstruct_1.string)()),
});
exports.GetCarListParamsStruct = CommonStruct_1.CarPageParamsStruct;
exports.UpdateCarStruct = (0, superstruct_1.partial)(exports.CarStruct);
