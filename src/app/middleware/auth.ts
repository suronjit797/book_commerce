import { RequestHandler } from "express";
import ApiError from "../../shared/ApiError";
import httpStatus from "http-status";
import jwt from "jsonwebtoken";
import config from "../../config";
import { CustomJwtPayload } from "../../shared/globalInterfaces";
import prisma from "../../shared/prisma";

export const tokenVerify: RequestHandler = async (req, res, next) => {
  try {
    const token = req.headers.authorization;
    if (!token) throw new ApiError(httpStatus.UNAUTHORIZED, "you are not authorized");
    const decoded = jwt.verify(token, config.token.access_token_secret) as CustomJwtPayload;

    let isExist = await prisma.user.findUnique({ where: { id: decoded.id } });
    if (!isExist) throw new ApiError(httpStatus.BAD_REQUEST, `Invalid user`);
    req.user = decoded;
    next();
  } catch (error) {
    next(error);
  }
};
