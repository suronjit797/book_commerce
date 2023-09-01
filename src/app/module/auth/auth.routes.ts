import express from "express";
import * as controller from "./auth.controller";
import globalValidator from "../../middleware/globalValidation";
import { createUserValidation, loginUserValidation } from "./auth.validation";

const authRouter = express.Router();

authRouter.post("/signup", globalValidator(createUserValidation), controller.createUser);
authRouter.post('/signin', globalValidator(loginUserValidation), controller.loginController)


export default authRouter;
