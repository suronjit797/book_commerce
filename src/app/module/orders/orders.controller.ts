import { RequestHandler } from "express";
import * as service from "./orders.service";
import sendRes from "../../../shared/sendRes";
import httpStatus from "http-status";

export const createOrder: RequestHandler = async (req, res, next) => {
  try {
    const data = await service.createOrderService(req.body, req.user);

    return sendRes(res, httpStatus.CREATED, {
      success: true,
      message: "Order Created Successfully",
      data,
    });
  } catch (error) {
    console.log(error);
    next(error);
  }
};

export const getAllOrders: RequestHandler = async (req, res, next) => {
  try {
    const data = await service.getAllOrdersService();

    return sendRes(res, httpStatus.CREATED, {
      success: true,
      message: "Orders Retrieved  Successfully",
      data,
    });
  } catch (error) {
    console.log(error);
    next(error);
  }
};

export const getOrder: RequestHandler = async (req, res, next) => {
  try {
    const data = await service.getOrderService(req.params.id, req.user);

    return sendRes(res, httpStatus.CREATED, {
      success: true,
      message: "Order Retrieved  Successfully",
      data,
    });
  } catch (error) {
    console.log(error);
    next(error);
  }
};
