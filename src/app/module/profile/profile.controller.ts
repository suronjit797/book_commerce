import { RequestHandler } from "express";
import * as service from "./profile.service";
import sendRes from "../../../shared/sendRes";
import httpStatus from "http-status";

export const getProfile: RequestHandler = async (req, res, next) => {
  try {
    const data = await service.getProfileData(req?.user?.id);

    sendRes(res, httpStatus.OK, {
      success: true,
      message: "Users fetched Successfully",
      data,
    });
  } catch (error) {
    next(error);
  }
};
