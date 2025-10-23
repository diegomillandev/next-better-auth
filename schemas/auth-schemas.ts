import { z } from "zod";

export const SignInSchema = z.object({
  email: z.email("Invalid email address"),
  password: z.string().min(6, "Password is required"),
});

export const SignUpSchema = z
  .object({
    name: z.string().min(2, "Name must be at least 2 characters long"),
    email: z.email("Invalid email address"),
    password: z.string().min(8, "Password must be at least 8 characters long"),
    passwordConfirmation: z.string().min(8, "Please confirm your password"),
  })
  .refine((data) => data.password === data.passwordConfirmation, {
    message: "Passwords do not match",
    path: ["confirmPassword"],
  });
