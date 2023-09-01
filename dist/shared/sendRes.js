"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sendRes = (res, status, payload) => {
    const { success, message, data, meta } = payload;
    const response = { success, message, data };
    if (meta) {
        response.meta = meta;
    }
    return res.status(status).send(response);
};
exports.default = sendRes;
