import express from "express";
import * as controller from "./books.controller";
import globalValidator from "../../middleware/globalValidation";
import { bookValidation, updateValidation } from "./books.validation";

const booksRouter = express.Router();

booksRouter.get("/", controller.getAllBook);
booksRouter.get("/:id", controller.getBook);
booksRouter.patch("/:id", globalValidator(updateValidation), controller.updateBook);
booksRouter.delete("/:id", controller.removeBook);

booksRouter.post("/create-book", globalValidator(bookValidation), controller.createBook);

export default booksRouter;
