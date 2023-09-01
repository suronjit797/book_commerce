"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.loginUserValidation = exports.createUserValidation = void 0;
const zod_1 = require("zod");
const globalConstant_1 = require("../../../shared/globalConstant");
exports.createUserValidation = zod_1.z.object({
    body: zod_1.z.object({
        name: zod_1.z.string({ required_error: "name is required" }),
        email: zod_1.z.string({ required_error: "email is required" }),
        password: zod_1.z.string({ required_error: "password is required" }),
        role: zod_1.z.enum(Object.keys(globalConstant_1.userRole)),
        contactNo: zod_1.z.string({ required_error: "contactNo is required" }),
        address: zod_1.z.string({ required_error: "address is required" }),
        profileImg: zod_1.z.string({ required_error: "profileImg is required" }),
    }),
});
exports.loginUserValidation = zod_1.z.object({
    body: zod_1.z.object({
        email: zod_1.z.string().email(),
        password: zod_1.z.string(),
    }),
});
