import { User } from "@prisma/client";
import prisma from "../../../shared/prisma";
import ApiError from "../../../shared/ApiError";
import httpStatus from "http-status";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import config from "../../../config";

export const createUserService = async (data: User): Promise<Partial<User> | null> => {
  const isExist = await prisma.user.findUnique({ where: { email: data.email } });
  if (isExist) {
    throw new ApiError(httpStatus.BAD_REQUEST, "user already exists");
  }
  const newUser = await prisma.user.create({ data });
  const result: Partial<User> = { ...newUser };
  delete result.password;
  return result;
};

export const loginService = async (payload: User) => {
  // existence of user
  const isExist = await prisma.user.findUnique({ where: { email: payload.email } });
  if (!isExist) {
    throw new ApiError(httpStatus.BAD_REQUEST, "User and Password dose not matched");
  }
  const { id, password, email, name } = isExist;

  // if no password
  if (!password) throw new ApiError(httpStatus.FORBIDDEN, "Server error occurred");
  if (!payload.password) throw new ApiError(httpStatus.FORBIDDEN, "Password is required");

  // verify
  const isVerified = await bcrypt.compare(payload.password, password);

  if (!isVerified) throw new ApiError(httpStatus.BAD_REQUEST, "User and Password dose not matched");

  const accessToken = jwt.sign({ id, email, name }, config.token.access_token_secret, {
    expiresIn: config.token.access_token_time,
  });
  const refreshToken = jwt.sign({ id, email, name }, config.token.refresh_token_secret, {
    expiresIn: config.token.refresh_token_time,
  });

  return { accessToken, refreshToken };
};
