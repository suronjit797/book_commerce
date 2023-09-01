import express from "express";
import authRouter from "./auth/auth.routes";
import userRouter from "./users/users.routes";
import categoryRouter from "./categories/categories.routes";
import booksRouter from "./books/books.routes";

const router = express.Router();

router.use("/auth", authRouter);
router.use("/users", userRouter);
router.use("/categories", categoryRouter);
router.use("/books", booksRouter);

export default router;
