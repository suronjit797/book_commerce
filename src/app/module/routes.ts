import express from "express";
import authRouter from "./auth/auth.routes";
import userRouter from "./users/users.routes";
import categoryRouter from "./categories/categories.routes";

const router = express.Router();

router.use("/auth", authRouter);
router.use("/users", userRouter);
router.use("/categories", categoryRouter);

export default router;
