import express from "express";
import authRouter from "./auth/auth.routes";
import userRouter from "./users/users.routes";
import categoryRouter from "./categories/categories.routes";
import booksRouter from "./books/books.routes";
import ordersRouter from "./orders/orders.routes";

const router = express.Router();

router.use("/auth", authRouter);
router.use("/users", userRouter);
router.use("/categories", categoryRouter);
router.use("/books", booksRouter);
router.use("/orders", ordersRouter);

export default router;
