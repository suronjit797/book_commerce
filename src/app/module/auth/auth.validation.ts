import { z } from "zod";
import { userRole } from "../../../shared/globalConstant";

export const createUserValidation = z.object({
  body: z.object({
    name: z.string({ required_error: "name is required" }),
    email: z.string({ required_error: "email is required" }),
    password: z.string({ required_error: "password is required" }),
    role: z.enum(Object.keys(userRole) as [string, ...string[]]),
    contactNo: z.string({ required_error: "contactNo is required" }),
    address: z.string({ required_error: "address is required" }),
    profileImg: z.string({ required_error: "profileImg is required" }),
  }),
});
