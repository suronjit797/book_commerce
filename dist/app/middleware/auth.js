"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.auth = void 0;
const ApiError_1 = __importDefault(require("../../shared/ApiError"));
const http_status_1 = __importDefault(require("http-status"));
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const config_1 = __importDefault(require("../../config"));
const prisma_1 = __importDefault(require("../../shared/prisma"));
const auth = (...roles) => (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const roleNames = [...roles, "superAdmin"];
    try {
        const token = req.headers.authorization;
        if (!token)
            throw new ApiError_1.default(http_status_1.default.UNAUTHORIZED, "you are not authorized");
        const decoded = jsonwebtoken_1.default.verify(token, config_1.default.token.access_token_secret);
        if (!(decoded === null || decoded === void 0 ? void 0 : decoded.role) || !roleNames.includes(decoded.role))
            throw new ApiError_1.default(http_status_1.default.FORBIDDEN, `${decoded.role} is not authorized to perform this operation`);
        const isExist = yield prisma_1.default.user.findUnique({ where: { id: decoded.id } });
        if (!isExist) {
            throw new ApiError_1.default(http_status_1.default.BAD_REQUEST, `Invalid user`);
        }
        req.user = decoded;
        next();
    }
    catch (error) {
        next(error);
    }
});
exports.auth = auth;
