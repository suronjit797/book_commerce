import { Book } from "@prisma/client";
import prisma from "../../../shared/prisma";

export const createBookService = async (data: Book): Promise<Book> => {
  return await prisma.book.create({ data });
};
