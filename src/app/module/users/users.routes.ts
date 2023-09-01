import express from "express";
import * as controller from "./users.controller";

const userRouter = express.Router();

userRouter.get("/", controller.getAllUser);
userRouter.get("/:id", controller.getSingleUser);
userRouter.patch("/:id", controller.updateUser);
userRouter.delete("/:id", controller.removeUser);

export default userRouter;