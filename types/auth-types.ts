import {
  ForgotPasswordSchema,
  SignInSchema,
  SignUpSchema,
} from "@/schemas/auth-schemas";
import { z } from "zod";

export type SignInData = z.infer<typeof SignInSchema>;
export type SignUpData = z.infer<typeof SignUpSchema>;
export type ForgotPasswordData = z.infer<typeof ForgotPasswordSchema>;
