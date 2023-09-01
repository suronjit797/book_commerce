import { Category } from "@prisma/client";
import prisma from "../../../shared/prisma";

export const createCategoryService = async (data: Category): Promise<Category> => {
  return await prisma.category.create({ data });
};

export const getAllCategoryService = async (): Promise<Category[]> => {
  return await prisma.category.findMany();
};

export const getSingleCategoryService = async (id: string): Promise<Category | null> => {
  return await prisma.category.findUnique({ where: { id }, include: { books: true } });
};

export const updateCategoryService = async (
  id: string,
  data: Category
): Promise<Category | null> => {
  return await prisma.category.update({ where: { id }, data });
};

export const removeCategoryService = async (id: string): Promise<Category | null> => {
  return await prisma.category.delete({ where: { id } });
};
