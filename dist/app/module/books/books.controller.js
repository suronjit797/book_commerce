"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
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
exports.removeBook = exports.updateBook = exports.getBookByCategory = exports.getBook = exports.getAllBook = exports.createBook = void 0;
const service = __importStar(require("./books.service"));
const sendRes_1 = __importDefault(require("../../../shared/sendRes"));
const http_status_1 = __importDefault(require("http-status"));
const filterHelper_1 = __importDefault(require("../../../helper/filterHelper"));
const paginationHelper_1 = require("../../../helper/paginationHelper");
const createBook = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const data = yield service.createBookService(req.body);
        return (0, sendRes_1.default)(res, http_status_1.default.CREATED, {
            success: true,
            message: "Book Created Successfully",
            data,
        });
    }
    catch (error) {
        console.log(error);
        next(error);
    }
});
exports.createBook = createBook;
const getAllBook = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const filter = yield (0, filterHelper_1.default)(req, [
            "search",
            "minPrice",
            "maxPrice",
            "category",
            "title",
            "author",
            "genre",
            "categoryId",
        ], ["title", "author", "genre"]);
        console.log(filter);
        const pagination = (0, paginationHelper_1.paginationHelper)(req.query);
        const result = yield service.getAllBookService(pagination, filter);
        return (0, sendRes_1.default)(res, http_status_1.default.CREATED, {
            success: true,
            message: "Book Fetched Successfully",
            meta: result.meta,
            data: result.data,
            // data: filter
        });
    }
    catch (error) {
        console.log(error);
        next(error);
    }
});
exports.getAllBook = getAllBook;
const getBook = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const data = yield service.getBookService(req.params.id);
        return (0, sendRes_1.default)(res, http_status_1.default.CREATED, {
            success: true,
            message: "Book Fetched Successfully",
            data,
        });
    }
    catch (error) {
        console.log(error);
        next(error);
    }
});
exports.getBook = getBook;
const getBookByCategory = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const data = yield service.getBookByCategoryService(req.params.categoryId);
        return (0, sendRes_1.default)(res, http_status_1.default.CREATED, {
            success: true,
            message: "Book Fetched Successfully",
            data,
        });
    }
    catch (error) {
        console.log(error);
        next(error);
    }
});
exports.getBookByCategory = getBookByCategory;
const updateBook = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const data = yield service.updateBookService(req.params.id, req.body);
        return (0, sendRes_1.default)(res, http_status_1.default.CREATED, {
            success: true,
            message: "Book Updated Successfully",
            data,
        });
    }
    catch (error) {
        console.log(error);
        next(error);
    }
});
exports.updateBook = updateBook;
const removeBook = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const data = yield service.removeBookService(req.params.id);
        return (0, sendRes_1.default)(res, http_status_1.default.CREATED, {
            success: true,
            message: "Book Deleted Successfully",
            data,
        });
    }
    catch (error) {
        console.log(error);
        next(error);
    }
});
exports.removeBook = removeBook;
