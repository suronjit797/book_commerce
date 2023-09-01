import express from "express";
import * as controller from "./profile.controller";
import { auth } from "../../middleware/auth";
import { userRole } from "../../../shared/globalConstant";

const profileRouter = express.Router();

profileRouter.get("/", auth(userRole.admin, userRole.customer), controller.getProfile);

export default profileRouter;
