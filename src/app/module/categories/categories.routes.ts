import express from "express";
import * as controller from "./categories.controller";
import globalValidator from "../../middleware/globalValidation";
import { createCategoryValidation } from "./categories.validation";

const categoryRouter = express.Router();

categoryRouter.get("/", controller.getAllCategory);
categoryRouter.get("/:id", controller.getSingleCategory);

categoryRouter.post(
  "/create-category",
  globalValidator(createCategoryValidation),
  controller.createCategory
);

export default categoryRouter;
