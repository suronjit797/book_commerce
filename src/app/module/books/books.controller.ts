import { RequestHandler } from "express";
import * as service from "./books.service";
import sendRes from "../../../shared/sendRes";
import httpStatus from "http-status";

export const createBook: RequestHandler = async (req, res, next) => {
  try {
    const data = await service.createBookService(req.body);

    return sendRes(res, httpStatus.CREATED, {
      success: true,
      message: "Book Created Successfully",
      data,
    });
  } catch (error) {
    console.log(error)
    next(error);
  }
};

export const getAllBook: RequestHandler = async (req, res, next) => {
  try {
    const data = await service.getAllBookService();

    return sendRes(res, httpStatus.CREATED, {
      success: true,
      message: "Book Fetched Successfully",
      data,
    });
  } catch (error) {
    console.log(error)
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
    console.log(error)
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
    console.log(error)
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
    console.log(error)
    next(error);
  }
};
