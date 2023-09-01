import { Book, Order, OrderedBook } from "@prisma/client";
import prisma from "../../../shared/prisma";
import { CustomJwtPayload } from "../../../shared/globalInterfaces";
import { JwtPayload } from "jsonwebtoken";
import ApiError from "../../../shared/ApiError";
import httpStatus from "http-status";
import { userRole } from "../../../shared/globalConstant";

type TOrderData = {
  orderedBooks: [];
};

export const createOrderService = async (
  data: TOrderData,
  user: CustomJwtPayload | JwtPayload
): Promise<Order | null> => {
  const order = await prisma.order.create({ data: { status: "pending", userId: user.id } });

  for (let i = 0; i < data.orderedBooks.length; i++) {
    const { quantity, bookId } = data.orderedBooks[i];
    await prisma.orderedBook.create({ data: { quantity, bookId, orderId: order.id } });
  }

  return await prisma.order.findUnique({
    where: { id: order.id },
    include: {
      orderedBooks: {
        select: {
          bookId: true,
          quantity: true,
        },
      },
    },
  });
};

export const getAllOrdersService = async (): Promise<any> => {
  return await prisma.order.findMany({
    include: {
      orderedBooks: {
        select: {
          bookId: true,
          quantity: true,
        },
      },
    },
  });
};

export const getOrderService = async (
  id: string,
  user: CustomJwtPayload | JwtPayload
): Promise<any> => {
  const data = await prisma.order.findUnique({
    where: { id },
    include: {
      orderedBooks: {
        select: {
          bookId: true,
          quantity: true,
        },
      },
    },
  });

  if (user.role === userRole.customer && data?.userId !== user.id) {
    throw new ApiError(httpStatus.UNAUTHORIZED, "Unauthorized access ");
  }
  return data;
};
