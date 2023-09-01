import { Book, OrderedBook } from "@prisma/client";
import prisma from "../../../shared/prisma";
import { CustomJwtPayload } from "../../../shared/globalInterfaces";
import { JwtPayload } from "jsonwebtoken";

type TOrderData = {
  orderedBooks: [];
};

export const createBookService = async (
  data: TOrderData,
  user: CustomJwtPayload | JwtPayload
): Promise<any> => {
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
