import express from "express";
import * as controller from "./categories.controller";
import globalValidator from "../../middleware/globalValidation";
import { categoryValidation } from "./categories.validation";
import { auth } from "../../middleware/auth";
import { userRole } from "../../../shared/globalConstant";

const categoryRouter = express.Router();

categoryRouter.get("/", controller.getAllCategory);
categoryRouter.get("/:id", controller.getSingleCategory);
categoryRouter.delete("/:id", auth(userRole.admin), controller.removeCategory);

categoryRouter.patch(
  "/:id",
  auth(userRole.admin),
  globalValidator(categoryValidation),
  controller.updateCategory
);

categoryRouter.post(
  "/create-category",
  globalValidator(categoryValidation),
  auth(userRole.admin),
  controller.createCategory
);

export default categoryRouter;
