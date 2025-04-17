"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CarPageParamsStruct = exports.CursorParamsStruct = exports.PageParamsStruct = exports.IdParamsStruct = void 0;
const superstruct_1 = require("superstruct");
const integerString = (0, superstruct_1.coerce)((0, superstruct_1.integer)(), (0, superstruct_1.string)(), (value) => parseInt(value));
exports.IdParamsStruct = (0, superstruct_1.object)({
    id: integerString,
});
//페이지네이션
exports.PageParamsStruct = (0, superstruct_1.object)({
    page: (0, superstruct_1.defaulted)(integerString, 1),
    pageSize: (0, superstruct_1.defaulted)(integerString, 10),
    orderBy: (0, superstruct_1.optional)((0, superstruct_1.enums)(["recent"])),
    keyword: (0, superstruct_1.optional)((0, superstruct_1.nonempty)((0, superstruct_1.string)())),
});
//커서
exports.CursorParamsStruct = (0, superstruct_1.object)({
    cursor: (0, superstruct_1.defaulted)(integerString, 0),
    limit: (0, superstruct_1.defaulted)(integerString, 10),
    orderBy: (0, superstruct_1.optional)((0, superstruct_1.enums)(["recent"])),
    keyword: (0, superstruct_1.optional)((0, superstruct_1.nonempty)((0, superstruct_1.string)())),
});
//차량
exports.CarPageParamsStruct = (0, superstruct_1.object)({
    page: (0, superstruct_1.defaulted)(integerString, 1),
    pageSize: (0, superstruct_1.defaulted)(integerString, 10),
    status: (0, superstruct_1.optional)((0, superstruct_1.enums)(["possession", "contractProceeding", "contractCompleted"])),
    searchBy: (0, superstruct_1.optional)((0, superstruct_1.enums)(["carNumber", "model"])),
    keyword: (0, superstruct_1.optional)((0, superstruct_1.nonempty)((0, superstruct_1.string)())),
});
