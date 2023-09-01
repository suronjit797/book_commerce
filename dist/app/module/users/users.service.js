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
exports.removeUserService = exports.updateUserService = exports.getSingleUserService = exports.getAllUserService = void 0;
const prisma_1 = __importDefault(require("../../../shared/prisma"));
const userSelect = {
    id: true,
    name: true,
    email: true,
    role: true,
    contactNo: true,
    address: true,
    profileImg: true,
    createdAt: true,
    updatedAt: true,
};
const getAllUserService = () => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield prisma_1.default.user.findMany({
        select: userSelect,
    });
    return result;
});
exports.getAllUserService = getAllUserService;
const getSingleUserService = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield prisma_1.default.user.findUnique({
        where: {
            id,
        },
        select: userSelect,
    });
    return result;
});
exports.getSingleUserService = getSingleUserService;
const updateUserService = (id, data) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield prisma_1.default.user.update({
        where: {
            id,
        },
        data,
        select: userSelect,
    });
    return result;
});
exports.updateUserService = updateUserService;
const removeUserService = (id) => __awaiter(void 0, void 0, void 0, function* () {
    yield prisma_1.default.user.delete({
        where: {
            id,
        },
    });
});
exports.removeUserService = removeUserService;
