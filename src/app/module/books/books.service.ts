import { Book } from "@prisma/client";
import prisma from "../../../shared/prisma";

export const createBookService = async (data: Book): Promise<Book> => {
  return await prisma.book.create({ data });
};
export const getAllBookService = async (): Promise<Book[]> => {
  return await prisma.book.findMany();
};
export const getBookService = async (id: string): Promise<Book | null> => {
  return await prisma.book.findUnique({ where: { id } });
};

export const updateBookService = async (id: string, data: Partial<Book>): Promise<Book | null> => {
  return await prisma.book.update({ where: { id }, data });
};

export const removeBookService = async (id: string): Promise<Book> => {
  return await prisma.book.delete({ where: { id } });
};
