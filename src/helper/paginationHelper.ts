import { validSortOrderValues } from "../shared/globalConstant";
import { IPagination, ISortCondition } from "../shared/globalInterfaces";

export const pic = <T extends object, K extends keyof T>(obj: T, keys: K[]): Partial<T> => {
  const findObject: Partial<T> = {};

  for (const key of keys) {
    if (obj && Object.prototype.hasOwnProperty.call(obj, key)) {
      findObject[key] = obj[key];
    }
  }
  return findObject;
};

export const paginationHelper = <T extends Record<string, unknown>>(obj: T): IPagination => {
  const keys: (keyof T)[] = ["page", "size", "sortOrder", "sortBy"];
  const options = pic(obj, keys);

  const page: number = Math.abs(Number(options.page) || 1);
  const size: number = Math.abs(Number(options.size) || 10);
  const skip: number = (page - 1) * size;
  
  const sortBy: string = (options.sortBy as string) || "createdAt";
  let sortOrder: string | number = (options.sortOrder as string | number) || "desc";

  if (!validSortOrderValues.includes(sortOrder)) {
    sortOrder = "desc";
  }

  const sortCondition: ISortCondition = {};
  if (sortBy && sortOrder) {
    sortCondition[sortBy] = sortOrder;
  }

  return {
    page,
    size,
    skip,
    sortCondition,
  };
};
