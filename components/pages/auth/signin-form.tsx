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
import { useState } from "react";
import { useForm } from "react-hook-form";
import { SignInSchema } from "@/schemas/auth-schemas";
import { zodResolver } from "@hookform/resolvers/zod";
import { SignInData } from "@/types/auth-types";
import { MessageError } from "@/components/shared/message-error";

export default function SignInForm() {
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(SignInSchema),
  });

  const onSubmit = async (data: SignInData) => {
    console.log("Form submitted:", data);
  };

  return (
    <div className="flex flex-col gap-6">
      <Card>
        <CardHeader>
          <CardTitle>Login to your account</CardTitle>
          <CardDescription>
            Enter your email below to login to your account
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form noValidate autoComplete="off" onSubmit={handleSubmit(onSubmit)}>
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
                  <MessageError message={errors.email?.message?.toString()} />
                )}
              </div>
              <div className="grid gap-2 relative">
                <div className="flex justify-between">
                  <Label htmlFor="password">Password</Label>
                  <Link
                    href="/forgot-password"
                    className="ml-auto inline-block text-sm underline-offset-4 hover:underline"
                  >
                    Forgot your password?
                  </Link>
                </div>
                <Input
                  id="password"
                  type="password"
                  placeholder="Enter your password"
                  className="placeholder:text-foreground/30"
                  {...register("password")}
                  required
                />
                {errors.password && (
                  <MessageError
                    message={errors.password?.message?.toString()}
                  />
                )}
              </div>
              <div className="flex flex-col gap-3 mt-1">
                <Button type="submit" className="w-full">
                  Sign In
                </Button>
              </div>
            </div>
            <div className="mt-4 text-center text-sm">
              Don&apos;t have an account?{" "}
              <Link href="/sign-up" className="underline underline-offset-4">
                Sign up
              </Link>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
