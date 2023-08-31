import express from "express";
import * as controller from "./auth.controller";
import globalValidator from "../../middleware/globalValidation";
import { createUserValidation } from "./auth.validation";

const authRouter = express.Router();

authRouter.post("/signup", globalValidator(createUserValidation), controller.createUser);


export default authRouter;
