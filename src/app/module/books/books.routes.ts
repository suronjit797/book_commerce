import express from "express";
import * as controller from "./books.controller";
import globalValidator from "../../middleware/globalValidation";
import { bookValidation } from "./books.validation";

const booksRouter = express.Router();

booksRouter.post("/create-book", globalValidator(bookValidation), controller.createBook);

export default booksRouter;
