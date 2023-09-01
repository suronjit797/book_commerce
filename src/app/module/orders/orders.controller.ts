import { RequestHandler } from "express";
import * as service from "./orders.service";
import sendRes from "../../../shared/sendRes";
import httpStatus from "http-status";

export const createBook: RequestHandler = async (req, res, next) => {
  try {
    console.log(req.user, req.body)

    const data = await service.createBookService(req.body, req.user);

    return sendRes(res, httpStatus.CREATED, {
      success: true,
      message: "Order Created Successfully",
      data,
    });
  } catch (error) {
    console.log(error)
    next(error);
  }
};
