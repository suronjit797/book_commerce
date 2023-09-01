import express from "express";
import * as controller from "./categories.controller";
import globalValidator from "../../middleware/globalValidation";
import { categoryValidation } from "./categories.validation";

const categoryRouter = express.Router();

categoryRouter.get("/", controller.getAllCategory);
categoryRouter.get("/:id", controller.getSingleCategory);
categoryRouter.patch("/:id", globalValidator(categoryValidation), controller.updateCategory);
categoryRouter.delete("/:id", controller.removeCategory);

categoryRouter.post(
  "/create-category",
  globalValidator(categoryValidation),
  controller.createCategory
);

export default categoryRouter;
