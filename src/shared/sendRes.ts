import { Response } from "express";

type TPayload<T> = {
  success: boolean;
  message: string;
  data?: T;
  meta?: {
    total: number;
    limit: number;
    page: number;
  };
};

const sendRes = <T>(res: Response, status: number, payload: TPayload<T>) => {
  const { success, message, data, meta } = payload;
  const response: TPayload<T> = { success, message, data };
  if (meta) {
    response.meta = meta;
  }
  console.log(response);

  return res.status(status).send(response);
};

export default sendRes;
