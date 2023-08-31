import { RequestHandler } from "express";
import * as service from  "./users.service";
import sendRes from "../../../shared/sendRes";
import httpStatus from "http-status";
import bcrypt from "bcrypt";
import config from "../../../config";

export const createUser: RequestHandler = async (req, res, next) => {
  try {
    const data = await service.getAllUser()

    sendRes(res, httpStatus.CREATED, {
      success: true,
      message: "Users fetched Successfully",
      data,
    });
  } catch (error) {
    next(error);
  }
};
