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
exports.removeUser = exports.updateUser = exports.getSingleUser = exports.getAllUser = void 0;
const service = __importStar(require("./users.service"));
const sendRes_1 = __importDefault(require("../../../shared/sendRes"));
const http_status_1 = __importDefault(require("http-status"));
const getAllUser = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const data = yield service.getAllUserService();
        (0, sendRes_1.default)(res, http_status_1.default.OK, {
            success: true,
            message: "Users fetched Successfully",
            data,
        });
    }
    catch (error) {
        next(error);
    }
});
exports.getAllUser = getAllUser;
const getSingleUser = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const data = yield service.getSingleUserService(req.params.id);
        (0, sendRes_1.default)(res, http_status_1.default.OK, {
            success: true,
            message: "User fetched Successfully",
            data,
        });
    }
    catch (error) {
        next(error);
    }
});
exports.getSingleUser = getSingleUser;
const updateUser = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const data = yield service.updateUserService(req.params.id, req.body);
        (0, sendRes_1.default)(res, http_status_1.default.OK, {
            success: true,
            message: "User Updated Successfully",
            data,
        });
    }
    catch (error) {
        next(error);
    }
});
exports.updateUser = updateUser;
const removeUser = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const data = yield service.removeUserService(req.params.id);
        (0, sendRes_1.default)(res, http_status_1.default.OK, {
            success: true,
            message: "User Deleted Successfully",
        });
    }
    catch (error) {
        next(error);
    }
});
exports.removeUser = removeUser;