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
import { SignUpSchema } from "@/schemas/auth-schemas";
import { SignUpData } from "@/types/auth-types";
import { MessageError } from "@/components/shared/message-error";

export default function SignUpForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(SignUpSchema),
  });

  const onSubmit = (data: SignUpData) => {
    console.log(data);
  };

  return (
    <div className="flex flex-col gap-6">
      <Card>
        <CardHeader>
          <CardTitle>Create an account</CardTitle>
          <CardDescription>
            Enter your email below to create your account
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form noValidate autoComplete="off" onSubmit={handleSubmit(onSubmit)}>
            <div className="flex flex-col gap-7">
              <div className="grid gap-2 relative">
                <Label htmlFor="email">Name</Label>
                <Input
                  className="placeholder:text-foreground/30"
                  id="name"
                  type="name"
                  placeholder="Millan"
                  {...register("name")}
                  autoFocus
                />
                {errors.name && (
                  <MessageError message={errors.name.message?.toString()} />
                )}
              </div>
              <div className="grid gap-2 relative">
                <Label htmlFor="email">Email</Label>
                <Input
                  className="placeholder:text-foreground/30"
                  id="email"
                  type="email"
                  placeholder="millan@example.com"
                  {...register("email")}
                />
                {errors.email && (
                  <MessageError message={errors.email?.message?.toString()} />
                )}
              </div>
              <div className="grid gap-2 relative">
                <Label htmlFor="password">Password</Label>
                <Input
                  className="placeholder:text-foreground/30"
                  id="password"
                  type="password"
                  {...register("password")}
                  placeholder="Enter your password"
                />
                {errors.password && (
                  <MessageError
                    message={errors.password?.message?.toString()}
                  />
                )}
              </div>
              <div className="grid gap-2 relative">
                <Label htmlFor="password_confirmation">Confirm Password</Label>
                <Input
                  className="placeholder:text-foreground/30"
                  id="password_confirmation"
                  type="password"
                  placeholder="Confirm your password"
                  {...register("passwordConfirmation")}
                />
                {errors.passwordConfirmation && (
                  <MessageError
                    message={errors.passwordConfirmation?.message?.toString()}
                  />
                )}
              </div>
              <div className="flex flex-col gap-3 mt-1">
                <Button type="submit" className="w-full cursor-pointer">
                  Create Account
                </Button>
              </div>
            </div>
            <div className="mt-4 text-center text-sm">
              Already have an account?{" "}
              <Link href="/sign-in" className="underline underline-offset-4">
                Sign in
              </Link>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
