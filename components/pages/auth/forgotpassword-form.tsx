"use client";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { ForgotPasswordSchema } from "@/schemas/auth-schemas";
import { ForgotPasswordData } from "@/types/auth-types";
import { forgetPassword } from "@/lib/auth-client";
import { toast } from "sonner";
import { useState } from "react";
import { Alert, AlertDescription } from "@/components/ui/alert";

export default function ForgotPasswordForm() {
  const [success, setSuccess] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(ForgotPasswordSchema),
  });

  const onSubmit = async (formData: ForgotPasswordData) => {
    const { email } = formData;
    try {
      const { error } = await forgetPassword({
        email,
        redirectTo: "/reset-password",
      });

      if (error) {
        toast.error(error.message);
        return;
      }

      toast.success("Password reset instructions sent to your email.");
      setSuccess(true);
    } catch (error) {
      toast.error("Something went wrong. Please try again.");
    }
  };

  return (
    <div className="flex flex-col gap-6">
      <Card>
        <CardHeader>
          <CardTitle>Reset your password</CardTitle>
          <CardDescription>
            Enter your email below to receive password reset instructions
          </CardDescription>
        </CardHeader>
        <CardContent>
          {!success ? (
            <form
              noValidate
              autoComplete="off"
              onSubmit={handleSubmit(onSubmit)}
            >
              <div className="flex flex-col gap-6">
                <div className="grid gap-2 relative">
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="millan@example.com"
                    className="placeholder:text-foreground/30"
                    {...register("email")}
                    required
                    autoFocus
                  />
                  {errors.email && (
                    <p className="text-sm text-red-600 absolute -bottom-5">
                      {errors.email.message}
                    </p>
                  )}
                </div>
                <div className="flex flex-col gap-3 mt-1">
                  <Button type="submit" className="w-full">
                    Sign In
                  </Button>
                </div>
              </div>
              <div className="mt-4 text-center text-sm">
                Remember your password?{" "}
                <Link href="/sign-in" className="underline underline-offset-4">
                  Sign In
                </Link>
              </div>
            </form>
          ) : (
            <div className="space-y-4">
              <Alert>
                <AlertDescription>
                  Password reset instructions have been sent to your email if it
                  exists in our system.
                </AlertDescription>
              </Alert>
              <Button asChild className="w-full" variant={"outline"}>
                <Link href="/sign-in">Back to Sign In</Link>
              </Button>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
}
