import express from "express";
import authRouter from "./auth/auth.routes";
import userRouter from "./users/users.routes";

const router = express.Router();

router.use("/auth", authRouter);
router.use("/users", userRouter);

export default router;
