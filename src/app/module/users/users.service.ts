import { User } from "@prisma/client";
import prisma from "../../../shared/prisma";

const userSelect = {
  id: true,
  name: true,
  email: true,
  role: true,
  contactNo: true,
  address: true,
  profileImg: true,
  createdAt: true,
  updatedAt: true,
};

export const getAllUserService = async (): Promise<Partial<User>[]> => {
  const result = await prisma.user.findMany({
    select: userSelect,
  });
  return result;
};
export const getSingleUserService = async (id: string): Promise<Partial<User> | null> => {
  const result = await prisma.user.findUnique({
    where: {
      id,
    },
    select: userSelect,
  });
  return result;
};

export const updateUserService = async (
  id: string,
  data: Partial<User>
): Promise<Partial<User> | null> => {
  const result = await prisma.user.update({
    where: {
      id,
    },
    data,
    select: userSelect,
  });
  return result;
};
