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
exports.removeCategoryService = exports.updateCategoryService = exports.getSingleCategoryService = exports.getAllCategoryService = exports.createCategoryService = void 0;
const prisma_1 = __importDefault(require("../../../shared/prisma"));
const createCategoryService = (data) => __awaiter(void 0, void 0, void 0, function* () {
    return yield prisma_1.default.category.create({ data });
});
exports.createCategoryService = createCategoryService;
const getAllCategoryService = () => __awaiter(void 0, void 0, void 0, function* () {
    return yield prisma_1.default.category.findMany();
});
exports.getAllCategoryService = getAllCategoryService;
const getSingleCategoryService = (id) => __awaiter(void 0, void 0, void 0, function* () {
    return yield prisma_1.default.category.findUnique({ where: { id }, include: { books: true } });
});
exports.getSingleCategoryService = getSingleCategoryService;
const updateCategoryService = (id, data) => __awaiter(void 0, void 0, void 0, function* () {
    return yield prisma_1.default.category.update({ where: { id }, data });
});
exports.updateCategoryService = updateCategoryService;
const removeCategoryService = (id) => __awaiter(void 0, void 0, void 0, function* () {
    return yield prisma_1.default.category.delete({ where: { id } });
});
exports.removeCategoryService = removeCategoryService;
