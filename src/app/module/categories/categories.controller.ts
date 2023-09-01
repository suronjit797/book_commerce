import { RequestHandler } from "express";
import * as service from "./categories.service";
import sendRes from "../../../shared/sendRes";
import httpStatus from "http-status";

export const createCategory: RequestHandler = async (req, res, next) => {
  try {
    const data = await service.createCategoryService(req.body);

    return sendRes(res, httpStatus.CREATED, {
      success: true,
      message: "Category Created Successfully",
      data,
    });
  } catch (error) {
    next(error);
  }
};


export const getAllCategory: RequestHandler = async (req, res, next) => {
  try {
    const data = await service.getAllCategoryService();

    return sendRes(res, httpStatus.OK, {
      success: true,
      message: "Categories fetched successfully",
      data,
    });
  } catch (error) {
    next(error);
  }
};

export const getSingleCategory: RequestHandler = async (req, res, next) => {
  try {
    const data = await service.getSingleCategoryService(req.params.id);

    return sendRes(res, httpStatus.OK, {
      success: true,
      message: "Category fetched successfully",
      data,
    });
  } catch (error) {
    next(error);
  }
};

export const updateCategory: RequestHandler = async (req, res, next) => {
  try {
    const data = await service.updateCategoryService(req.params.id, req.body);

    return sendRes(res, httpStatus.OK, {
      success: true,
      message: "Category updated successfully",
      data,
    });
  } catch (error) {
    next(error);
  }
};

export const removeCategory: RequestHandler = async (req, res, next) => {
  try {
    const data = await service.removeCategoryService(req.params.id);

    return sendRes(res, httpStatus.OK, {
      success: true,
      message: "Category removed successfully",
      data,
    });
  } catch (error) {
    next(error);
  }
};
