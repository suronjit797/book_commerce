import express from "express";
import * as controller from "./orders.controller";
import globalValidator from "../../middleware/globalValidation";
import { bookValidation } from "./orders.validation";
import { auth } from "../../middleware/auth";
import { userRole } from "../../../shared/globalConstant";

const ordersRouter = express.Router();

ordersRouter.post("/create-order", auth(userRole.customer), controller.createBook);

export default ordersRouter;
