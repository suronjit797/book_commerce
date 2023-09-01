import { Book, OrderedBook } from "@prisma/client";
import prisma from "../../../shared/prisma";
import { CustomJwtPayload } from "../../../shared/globalInterfaces";
import { JwtPayload } from "jsonwebtoken";

export const createBookService = async (
  data: OrderedBook,
  user: CustomJwtPayload | JwtPayload
): Promise<any> => {
  // const order = await prisma.order.create()
  // return await prisma.orderedBook.create({ data });
};
