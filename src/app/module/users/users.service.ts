import { User } from "@prisma/client";
import prisma from "../../../shared/prisma";
import { reset } from "colors";

export const getAllUser = async (): Promise<Partial<User>[]> => {
  const result = await prisma.user.findMany({
    select: {
      id: true,
      name: true,
      email: true,
      role: true,
      contactNo: true,
      address: true,
      profileImg: true,
      createdAt: true,
      updatedAt: true,
    },
  });
  return result;
};
