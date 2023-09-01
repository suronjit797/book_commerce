"use strict";
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
const paginationHelper_1 = require("./paginationHelper");
const filterHelper = (req, keys, partialSearching) => {
    const filter = (0, paginationHelper_1.pic)(req.query, keys);
    const { search } = filter, filterData = __rest(filter, ["search"]);
    const andCondition = [];
    // partial searching
    if (search && partialSearching.length > 0) {
        andCondition.push({
            OR: partialSearching.map((field) => ({
                [field]: {
                    contains: search,
                },
            })),
        });
    }
    if (Object.keys(filterData).length > 0) {
        andCondition.push({
            AND: Object.entries(filterData).map(([key, value]) => {
                if (key === "category") {
                    return { categoryId: value };
                }
                else if (key === "minPrice") {
                    return { price: { gte: Number(value) } };
                }
                else if (key === "maxPrice") {
                    return { price: { lte: Number(value) } };
                }
                else {
                    return { [key]: value };
                }
            }),
        });
    }
    return andCondition.length > 0 ? { AND: andCondition } : {};
};
exports.default = filterHelper;
