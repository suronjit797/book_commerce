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

export const getProfileData = async (id: string): Promise<Partial<User> | null> => {
  const result = await prisma.user.findUnique({ where: { id }, select: userSelect });
  return result;
};
