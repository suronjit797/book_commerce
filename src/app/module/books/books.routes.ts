import express from "express";
import * as controller from "./books.controller";
import globalValidator from "../../middleware/globalValidation";
import { bookValidation, updateValidation } from "./books.validation";
import { auth } from "../../middleware/auth";
import { userRole } from "../../../shared/globalConstant";

const booksRouter = express.Router();

booksRouter.get("/", controller.getAllBook);
booksRouter.get("/:id", controller.getBook);
booksRouter.get("/:categoryId/category", controller.getBookByCategory);
booksRouter.delete("/:id", auth(userRole.admin), controller.removeBook);

booksRouter.patch(
  "/:id",
  globalValidator(updateValidation),
  auth(userRole.admin),
  controller.updateBook
);

booksRouter.post(
  "/create-book",
  globalValidator(bookValidation),
  auth(userRole.admin),
  controller.createBook
);

export default booksRouter;
