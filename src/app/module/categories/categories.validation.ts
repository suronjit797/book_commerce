import { z } from "zod";
import { userRole } from "../../../shared/globalConstant";

export const createCategoryValidation = z.object({
  body: z.object({
    title: z.string({ required_error: "title is required" }),
  }),
});
