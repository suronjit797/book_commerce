import express from "express";
import * as controller from "./users.controller";
import { auth } from "../../middleware/auth";
import { userRole } from "../../../shared/globalConstant";

const userRouter = express.Router();

userRouter.get("/", auth(userRole.admin), controller.getAllUser);
userRouter.get("/:id", auth(userRole.admin), controller.getSingleUser);
userRouter.patch("/:id", auth(userRole.admin), controller.updateUser);
userRouter.delete("/:id", auth(userRole.admin), controller.removeUser);

export default userRouter;
