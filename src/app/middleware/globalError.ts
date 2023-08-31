import { ErrorRequestHandler } from "express";
import { IErrorMessages, IErrorPayload } from "../../shared/globalInterfaces";
import config from "../../config";
import zodErrorHandler from "../errorHandler/zodErrorHandler";
import { errorLog } from "../../shared/logger";

// eslint-disable-next-line no-unused-vars, @typescript-eslint/no-unused-vars
const globalError: ErrorRequestHandler = (error, req, res) => {
  let status: number = error.statusCode || 500;
  let message: string = error.message || "Internal server error occurred";
  let errorMessages: IErrorMessages[] = [
    {
      path: "",
      message: error.message || "Server error occurred",
    },
  ];

  switch (error?.name) {
    case "ZodError": {
      const result = zodErrorHandler(error);
      status = result.statusCode || 500;
      message = result.message;
      errorMessages = result.errorMessages;
      break;
    }

    default:
      break;
  }

  const errorPayload: IErrorPayload = {
    success: false,
    message,
    errorMessages,
    stack: config.NODE_ENV !== "production" && error?.stack,
  };

  errorLog(` [${status}]: ${message}`);

  return res.status(status).send(errorPayload);
};

export default globalError;
