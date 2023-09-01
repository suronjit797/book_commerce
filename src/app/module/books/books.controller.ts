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
