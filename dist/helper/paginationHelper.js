"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.paginationHelper = exports.pic = void 0;
const globalConstant_1 = require("../shared/globalConstant");
const pic = (obj, keys) => {
    const findObject = {};
    for (const key of keys) {
        if (obj && Object.prototype.hasOwnProperty.call(obj, key)) {
            findObject[key] = obj[key];
        }
    }
    return findObject;
};
exports.pic = pic;
const paginationHelper = (obj) => {
    const keys = ["page", "size", "sortOrder", "sortBy"];
    const options = (0, exports.pic)(obj, keys);
    const page = Math.abs(Number(options.page) || 1);
    const size = Math.abs(Number(options.size) || 10);
    const skip = (page - 1) * size;
    const sortBy = options.sortBy || "createdAt";
    let sortOrder = options.sortOrder || "desc";
    if (!globalConstant_1.validSortOrderValues.includes(sortOrder)) {
        sortOrder = "desc";
    }
    const sortCondition = {};
    if (sortBy && sortOrder) {
        sortCondition[sortBy] = sortOrder;
    }
    return {
        page,
        size,
        skip,
        sortCondition,
    };
};
exports.paginationHelper = paginationHelper;
