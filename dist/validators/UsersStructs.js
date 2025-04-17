"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateUserStruct = exports.CreateUserStruct = void 0;
const superstruct_1 = require("superstruct");
const CompanyStructs_js_1 = require("./CompanyStructs.js");
const PhoneNumber = (0, superstruct_1.pattern)((0, superstruct_1.string)(), /^01[0|1|6|7|8|9]-\d{3,4}-\d{4}$/);
const Email = (0, superstruct_1.pattern)((0, superstruct_1.string)(), /^[^\s@]+@[^\s@]+\.[^\s@]+$/);
exports.CreateUserStruct = (0, superstruct_1.object)({
    name: (0, superstruct_1.nonempty)((0, superstruct_1.string)()),
    email: (0, superstruct_1.nonempty)(Email),
    phoneNumber: (0, superstruct_1.nonempty)(PhoneNumber),
    password: (0, superstruct_1.nonempty)((0, superstruct_1.string)()),
    passwordConfirmation: (0, superstruct_1.nonempty)((0, superstruct_1.string)()),
    employeeNumber: (0, superstruct_1.nonempty)((0, superstruct_1.string)()),
    isAdmin: (0, superstruct_1.boolean)(),
    imageUrl: (0, superstruct_1.string)(),
    company: CompanyStructs_js_1.CompanyStruct,
});
exports.UpdateUserStruct = (0, superstruct_1.partial)((0, superstruct_1.object)({
    employeeNumber: (0, superstruct_1.nonempty)((0, superstruct_1.string)()),
    phoneNumber: (0, superstruct_1.nonempty)(PhoneNumber),
    currentPassword: (0, superstruct_1.nonempty)((0, superstruct_1.string)()),
    password: (0, superstruct_1.nonempty)((0, superstruct_1.string)()),
    passwordConfirmation: (0, superstruct_1.nonempty)((0, superstruct_1.string)()),
    imageUrl: (0, superstruct_1.string)(),
}));
