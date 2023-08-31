import express from "express";
import * as controller from "./users.controller";

const userRouter = express.Router();

userRouter.get("/",  controller.createUser);


export default userRouter;
