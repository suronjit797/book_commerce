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
exports.removeCategory = exports.updateCategory = exports.getSingleCategory = exports.getAllCategory = exports.createCategory = void 0;
const service = __importStar(require("./categories.service"));
const sendRes_1 = __importDefault(require("../../../shared/sendRes"));
const http_status_1 = __importDefault(require("http-status"));
const createCategory = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const data = yield service.createCategoryService(req.body);
        return (0, sendRes_1.default)(res, http_status_1.default.CREATED, {
            success: true,
            message: "Category Created Successfully",
            data,
        });
    }
    catch (error) {
        console.log(error);
        next(error);
    }
});
exports.createCategory = createCategory;
const getAllCategory = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const data = yield service.getAllCategoryService();
        return (0, sendRes_1.default)(res, http_status_1.default.OK, {
            success: true,
            message: "Categories fetched successfully",
            data,
        });
    }
    catch (error) {
        next(error);
    }
});
exports.getAllCategory = getAllCategory;
const getSingleCategory = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const data = yield service.getSingleCategoryService(req.params.id);
        return (0, sendRes_1.default)(res, http_status_1.default.OK, {
            success: true,
            message: "Category fetched successfully",
            data,
        });
    }
    catch (error) {
        next(error);
    }
});
exports.getSingleCategory = getSingleCategory;
const updateCategory = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const data = yield service.updateCategoryService(req.params.id, req.body);
        return (0, sendRes_1.default)(res, http_status_1.default.OK, {
            success: true,
            message: "Category updated successfully",
            data,
        });
    }
    catch (error) {
        next(error);
    }
});
exports.updateCategory = updateCategory;
const removeCategory = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const data = yield service.removeCategoryService(req.params.id);
        return (0, sendRes_1.default)(res, http_status_1.default.OK, {
            success: true,
            message: "Category removed successfully",
            data,
        });
    }
    catch (error) {
        next(error);
    }
});
exports.removeCategory = removeCategory;
