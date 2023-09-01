"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const config_1 = __importDefault(require("../../config"));
const zodErrorHandler_1 = __importDefault(require("../errorHandler/zodErrorHandler"));
const logger_1 = require("../../shared/logger");
const client_1 = require("@prisma/client");
const handleValidationError_1 = __importDefault(require("../errorHandler/handleValidationError"));
const handleClientError_1 = __importDefault(require("../errorHandler/handleClientError"));
const zod_1 = require("zod");
// eslint-disable-next-line no-unused-vars, @typescript-eslint/no-unused-vars
const globalError = (error, req, res, next) => {
    let status = error.statusCode || 500;
    let message = error.message || "Internal server error occurred";
    let errorMessages = [
        {
            path: "",
            message: error.message || "Server error occurred",
        },
    ];
    if (error instanceof zod_1.ZodError) {
        const result = (0, zodErrorHandler_1.default)(error);
        status = result.statusCode || 500;
        message = result.message;
        errorMessages = result.errorMessages;
    }
    else if (error instanceof client_1.Prisma.PrismaClientValidationError) {
        const simplifiedError = (0, handleValidationError_1.default)(error);
        status = simplifiedError.statusCode || 400;
        message = simplifiedError.message;
        errorMessages = simplifiedError.errorMessages;
    }
    else if (error instanceof client_1.Prisma.PrismaClientKnownRequestError) {
        const simplifiedError = (0, handleClientError_1.default)(error);
        status = simplifiedError.statusCode || 400;
        message = simplifiedError.message;
        errorMessages = simplifiedError.errorMessages;
    }
    const errorPayload = {
        success: false,
        message,
        errorMessages,
        stack: config_1.default.NODE_ENV !== "production" && (error === null || error === void 0 ? void 0 : error.stack),
    };
    (0, logger_1.errorLog)(` [${status}]: ${message}`);
    return res.status(status).send(errorPayload);
};
exports.default = globalError;
