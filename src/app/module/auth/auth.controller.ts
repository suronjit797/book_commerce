import { RequestHandler } from "express";
import * as service from "./auth.service";
import sendRes from "../../../shared/sendRes";
import httpStatus from "http-status";
import bcrypt from "bcrypt";
import config from "../../../config";

export const createUser: RequestHandler = async (req, res, next) => {
  try {
    const password = await bcrypt.hash(req.body.password, bcrypt.genSaltSync(config.sault_round));

    const data = await service.createUserService({ ...req.body, password });

    sendRes(res, httpStatus.CREATED, {
      success: true,
      message: "User Created Successfully",
      data,
    });
  } catch (error) {
    next(error);
  }
};

export const loginController: RequestHandler = async (req, res, next) => {
  try {
    const { accessToken, refreshToken } = await service.loginService(req.body);

    const cookieOptions = {
      secure: config.NODE_ENV === "production",
      httpOnly: true,
      maxAge: 365 * 24 * 60 * 60 * 1000,
    };

    res.cookie("refreshToken", refreshToken, cookieOptions);

    return sendRes(res, httpStatus.OK, {
      success: true,
      message: "User Login Successfully",
      data: { token: accessToken },
    });
  } catch (error) {
    return next(error);
  }
};
