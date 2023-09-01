import { RequestHandler } from "express";
import * as service from "./users.service";
import sendRes from "../../../shared/sendRes";
import httpStatus from "http-status";

export const getAllUser: RequestHandler = async (req, res, next) => {
  try {
    const data = await service.getAllUserService();

    sendRes(res, httpStatus.OK, {
      success: true,
      message: "Users fetched Successfully",
      data,
    });
  } catch (error) {
    next(error);
  }
};

export const getSingleUser: RequestHandler = async (req, res, next) => {
  try {
    const data = await service.getSingleUserService(req.params.id);

    sendRes(res, httpStatus.OK, {
      success: true,
      message: "User fetched Successfully",
      data,
    });
  } catch (error) {
    next(error);
  }
};

export const updateUser: RequestHandler = async (req, res, next) => {
  try {
    const data = await service.updateUserService(req.params.id, req.body);

    sendRes(res, httpStatus.OK, {
      success: true,
      message: "User Updated Successfully",
      data,
    });
  } catch (error) {
    next(error);
  }
};
export const removeUser: RequestHandler = async (req, res, next) => {
  try {
    const data = await service.removeUserService(req.params.id);

    sendRes(res, httpStatus.OK, {
      success: true,
      message: "User Deleted Successfully",
    });
  } catch (error) {
    next(error);
  }
};
