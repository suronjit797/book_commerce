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
exports.loginService = exports.createUserService = void 0;
const prisma_1 = __importDefault(require("../../../shared/prisma"));
const ApiError_1 = __importDefault(require("../../../shared/ApiError"));
const http_status_1 = __importDefault(require("http-status"));
const bcrypt_1 = __importDefault(require("bcrypt"));
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const config_1 = __importDefault(require("../../../config"));
const createUserService = (data) => __awaiter(void 0, void 0, void 0, function* () {
    const isExist = yield prisma_1.default.user.findUnique({ where: { email: data.email } });
    if (isExist) {
        throw new ApiError_1.default(http_status_1.default.BAD_REQUEST, "user already exists");
    }
    const newUser = yield prisma_1.default.user.create({ data });
    const result = Object.assign({}, newUser);
    delete result.password;
    return result;
});
exports.createUserService = createUserService;
const loginService = (payload) => __awaiter(void 0, void 0, void 0, function* () {
    // existence of user
    const isExist = yield prisma_1.default.user.findUnique({ where: { email: payload.email } });
    if (!isExist) {
        throw new ApiError_1.default(http_status_1.default.BAD_REQUEST, "User and Password dose not matched");
    }
    const { id, password, email, name, role } = isExist;
    // if no password
    if (!password)
        throw new ApiError_1.default(http_status_1.default.FORBIDDEN, "Server error occurred");
    if (!payload.password)
        throw new ApiError_1.default(http_status_1.default.FORBIDDEN, "Password is required");
    // verify
    const isVerified = yield bcrypt_1.default.compare(payload.password, password);
    if (!isVerified)
        throw new ApiError_1.default(http_status_1.default.BAD_REQUEST, "User and Password dose not matched");
    const accessToken = jsonwebtoken_1.default.sign({ id, email, name, role }, config_1.default.token.access_token_secret, {
        expiresIn: config_1.default.token.access_token_time,
    });
    const refreshToken = jsonwebtoken_1.default.sign({ id, email, name, role }, config_1.default.token.refresh_token_secret, {
        expiresIn: config_1.default.token.refresh_token_time,
    });
    return { accessToken, refreshToken };
});
exports.loginService = loginService;
