import express from "express";
import * as controller from "./orders.controller";
import globalValidator from "../../middleware/globalValidation";
import { orderValidation } from "./orders.validation";
import { auth } from "../../middleware/auth";
import { userRole } from "../../../shared/globalConstant";

const ordersRouter = express.Router();

ordersRouter.get("/", auth(userRole.customer, userRole.admin), controller.getAllOrders);
ordersRouter.get("/:id", auth(userRole.customer, userRole.admin), controller.getOrder);

ordersRouter.post(
  "/create-order",
  globalValidator(orderValidation),
  auth(userRole.customer),
  controller.createOrder
);

export default ordersRouter;
