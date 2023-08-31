import { RequestHandler } from "express";
import { createUserService } from "./auth.service";
import sendRes from "../../../shared/sendRes";
import httpStatus from "http-status";

export const createUser: RequestHandler = async (req, res, next) => {
  try {
    const data = await createUserService(req.body);

    sendRes(res, httpStatus.CREATED, { success: true, message: "User Created Successfully", data });
  } catch (error) {
    next(error);
  }
};
