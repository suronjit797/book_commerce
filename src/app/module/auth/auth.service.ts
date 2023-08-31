import { User } from "@prisma/client";
import prisma from "../../../shared/prisma";
import { reset } from "colors";

export const createUserService = async (data: User): Promise<Partial<User> | null> => {
  const newUser = await prisma.user.create({ data });
  const result: Partial<User> = { ...newUser };
  delete result.password;
  return result;
};
