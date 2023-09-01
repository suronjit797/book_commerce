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
exports.getOrderService = exports.getAllOrdersService = exports.createOrderService = void 0;
const prisma_1 = __importDefault(require("../../../shared/prisma"));
const ApiError_1 = __importDefault(require("../../../shared/ApiError"));
const http_status_1 = __importDefault(require("http-status"));
const globalConstant_1 = require("../../../shared/globalConstant");
const createOrderService = (data, user) => __awaiter(void 0, void 0, void 0, function* () {
    const order = yield prisma_1.default.order.create({ data: { status: "pending", userId: user.id } });
    for (let i = 0; i < data.orderedBooks.length; i++) {
        const { quantity, bookId } = data.orderedBooks[i];
        yield prisma_1.default.orderedBook.create({ data: { quantity, bookId, orderId: order.id } });
    }
    return yield prisma_1.default.order.findUnique({
        where: { id: order.id },
        include: {
            orderedBooks: {
                select: {
                    bookId: true,
                    quantity: true,
                },
            },
        },
    });
});
exports.createOrderService = createOrderService;
const getAllOrdersService = (user) => __awaiter(void 0, void 0, void 0, function* () {
    if ((user === null || user === void 0 ? void 0 : user.role) === globalConstant_1.userRole.customer) {
        return yield prisma_1.default.order.findMany({
            where: { userId: user.id },
            include: {
                orderedBooks: {
                    select: {
                        bookId: true,
                        quantity: true,
                    },
                },
            },
        });
    }
    return yield prisma_1.default.order.findMany({
        include: {
            orderedBooks: {
                select: {
                    bookId: true,
                    quantity: true,
                },
            },
        },
    });
});
exports.getAllOrdersService = getAllOrdersService;
const getOrderService = (id, user) => __awaiter(void 0, void 0, void 0, function* () {
    const data = yield prisma_1.default.order.findUnique({
        where: { id },
        include: {
            orderedBooks: {
                select: {
                    bookId: true,
                    quantity: true,
                },
            },
        },
    });
    if (user.role === globalConstant_1.userRole.customer && (data === null || data === void 0 ? void 0 : data.userId) !== user.id) {
        throw new ApiError_1.default(http_status_1.default.UNAUTHORIZED, "Unauthorized access ");
    }
    return data;
});
exports.getOrderService = getOrderService;
