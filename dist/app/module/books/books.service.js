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
exports.removeBookService = exports.updateBookService = exports.getBookService = exports.getAllBookService = exports.createBookService = void 0;
const prisma_1 = __importDefault(require("../../../shared/prisma"));
const createBookService = (data) => __awaiter(void 0, void 0, void 0, function* () {
    return yield prisma_1.default.book.create({ data });
});
exports.createBookService = createBookService;
const getAllBookService = (pagination, whereConditions) => __awaiter(void 0, void 0, void 0, function* () {
    const { size, page, skip, sortCondition } = pagination;
    const data = yield prisma_1.default.book.findMany({
        where: whereConditions,
        take: size,
        skip,
        orderBy: sortCondition,
    });
    const total = yield prisma_1.default.book.count({
        where: whereConditions,
    });
    const meta = {
        size,
        page,
        total,
        totalPage: Math.ceil(total / size)
    };
    return { meta, data };
});
exports.getAllBookService = getAllBookService;
const getBookService = (id) => __awaiter(void 0, void 0, void 0, function* () {
    return yield prisma_1.default.book.findUnique({ where: { id } });
});
exports.getBookService = getBookService;
const updateBookService = (id, data) => __awaiter(void 0, void 0, void 0, function* () {
    return yield prisma_1.default.book.update({ where: { id }, data });
});
exports.updateBookService = updateBookService;
const removeBookService = (id) => __awaiter(void 0, void 0, void 0, function* () {
    return yield prisma_1.default.book.delete({ where: { id } });
});
exports.removeBookService = removeBookService;
