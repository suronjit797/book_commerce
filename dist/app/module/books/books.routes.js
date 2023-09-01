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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const controller = __importStar(require("./books.controller"));
const globalValidation_1 = __importDefault(require("../../middleware/globalValidation"));
const books_validation_1 = require("./books.validation");
const auth_1 = require("../../middleware/auth");
const globalConstant_1 = require("../../../shared/globalConstant");
const booksRouter = express_1.default.Router();
booksRouter.get("/", controller.getAllBook);
booksRouter.get("/:id", controller.getBook);
booksRouter.delete("/:id", (0, auth_1.auth)(globalConstant_1.userRole.admin), controller.removeBook);
booksRouter.patch("/:id", (0, globalValidation_1.default)(books_validation_1.updateValidation), (0, auth_1.auth)(globalConstant_1.userRole.admin), controller.updateBook);
booksRouter.post("/create-book", (0, globalValidation_1.default)(books_validation_1.bookValidation), (0, auth_1.auth)(globalConstant_1.userRole.admin), controller.createBook);
exports.default = booksRouter;
