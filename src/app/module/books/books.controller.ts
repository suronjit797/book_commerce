import { RequestHandler } from "express";
import * as service from "./books.service";
import sendRes from "../../../shared/sendRes";
import httpStatus from "http-status";
import filterHelper from "../../../helper/filterHelper";
import { paginationHelper } from "../../../helper/paginationHelper";

export const createBook: RequestHandler = async (req, res, next) => {
  try {
    const data = await service.createBookService(req.body);

    return sendRes(res, httpStatus.CREATED, {
      success: true,
      message: "Book Created Successfully",
      data,
    });
  } catch (error) {
    console.log(error);
    next(error);
  }
};

export const getAllBook: RequestHandler = async (req, res, next) => {
  try {
    const filter = await filterHelper(
      req,
      [
        "search",
        "minPrice",
        "maxPrice",
        "category",
        "title",
        "author",
        "genre",
        "categoryId",
      ],
      ["title", "author", "genre"]
    );

    console.log(filter);
    

    const pagination = paginationHelper(req.query);
    const result = await service.getAllBookService(pagination, filter);

    return sendRes(res, httpStatus.CREATED, {
      success: true,
      message: "Book Fetched Successfully",
      meta: result.meta,
      data: result.data,
      // data: filter
    });
  } catch (error) {
    console.log(error);
    next(error);
  }
};

export const getBook: RequestHandler = async (req, res, next) => {
  try {
    const data = await service.getBookService(req.params.id);

    return sendRes(res, httpStatus.CREATED, {
      success: true,
      message: "Book Fetched Successfully",
      data,
    });
  } catch (error) {
    console.log(error);
    next(error);
  }
};
export const getBookByCategory: RequestHandler = async (req, res, next) => {
  try {
    const data = await service.getBookByCategoryService(req.params.categoryId);

    return sendRes(res, httpStatus.CREATED, {
      success: true,
      message: "Book Fetched Successfully",
      data,
    });
  } catch (error) {
    console.log(error);
    next(error);
  }
};

export const updateBook: RequestHandler = async (req, res, next) => {
  try {
    const data = await service.updateBookService(req.params.id, req.body);

    return sendRes(res, httpStatus.CREATED, {
      success: true,
      message: "Book Updated Successfully",
      data,
    });
  } catch (error) {
    console.log(error);
    next(error);
  }
};

export const removeBook: RequestHandler = async (req, res, next) => {
  try {
    const data = await service.removeBookService(req.params.id);

    return sendRes(res, httpStatus.CREATED, {
      success: true,
      message: "Book Deleted Successfully",
      data,
    });
  } catch (error) {
    console.log(error);
    next(error);
  }
};
