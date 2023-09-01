"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const morgan_1 = __importDefault(require("morgan"));
const sendRes_1 = __importDefault(require("./shared/sendRes"));
const http_status_1 = __importDefault(require("http-status"));
const routes_1 = __importDefault(require("./app/module/routes"));
const cookie_parser_1 = __importDefault(require("cookie-parser"));
const globalError_1 = __importDefault(require("./app/middleware/globalError"));
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.use((0, cors_1.default)());
app.use(express_1.default.urlencoded({ extended: true }));
app.use((0, morgan_1.default)("tiny"));
app.use((0, cookie_parser_1.default)());
// home route
app.get("/", (req, res) => (0, sendRes_1.default)(res, http_status_1.default.OK, { success: true, message: "Welcome to server" }));
// main routing
app.use("/api/v1", routes_1.default);
//global error handler
app.use(globalError_1.default);
// routes not found
app.use((req, res) => {
    const errorPayload = {
        success: false,
        message: "Route not found",
        errorMessages: [
            {
                path: req.originalUrl,
                message: "Route not found",
            },
        ],
    };
    return res.status(404).send(errorPayload);
});
exports.default = app;
