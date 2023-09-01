import { Book } from "@prisma/client";
import prisma from "../../../shared/prisma";
import { IMeta, IPagination } from "../../../shared/globalInterfaces";

export const createBookService = async (data: Book): Promise<Book> => {
  return await prisma.book.create({ data });
};
export const getAllBookService = async (
  pagination: IPagination,
  whereConditions: any
): Promise<{ data: Book[]; meta: IMeta }> => {
  const { size, page, skip, sortCondition } = pagination;
  const data = await prisma.book.findMany({
    where: whereConditions,
    take: size,
    skip,
    orderBy: sortCondition,
  });

  const total = await prisma.book.count({
    where: whereConditions,
  });

  const meta = {
    size,
    page,
    total,
    totalPage: Math.ceil(total / size)
  };

  return { meta, data };
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
