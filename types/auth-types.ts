import { SignInSchema } from "@/schemas/auth-schemas";
import { z } from "zod";

export type SignInData = z.infer<typeof SignInSchema>;
