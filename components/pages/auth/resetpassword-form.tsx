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
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { MessageError } from "@/components/shared/message-error";
import Link from "next/link";
import { useState } from "react";
import { Eye, EyeClosed } from "lucide-react";
import { ResetPasswordSchema } from "@/schemas/auth-schemas";
import { toast } from "sonner";
import { resetPassword } from "@/lib/auth-client";
import { useRouter } from "next/navigation";

interface ResetPasswordFormProps {
  token?: string;
}

export default function ResetPasswordForm({ token }: ResetPasswordFormProps) {
  const [showingPassword, setShowingPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: zodResolver(ResetPasswordSchema),
  });

  const onSubmit = async (formData: any) => {
    const { password, passwordConfirmation } = formData;

    try {
      const { data, error } = await resetPassword({
        newPassword: password,
        token,
      });

      if (error) {
        toast.error(error.message);
        return;
      }

      toast.success("Your password has been reset successfully.");
      reset();
      setTimeout(() => {
        router.push("/sign-in");
      }, 1500);
    } catch (error) {
      toast.error("An error occurred while resetting the password.");
    }
  };

  return (
    <div className="flex flex-col gap-6">
      <Card>
        <CardHeader>
          <CardTitle>Reset your password</CardTitle>
          <CardDescription>Enter your new password below.</CardDescription>
        </CardHeader>
        <CardContent>
          <form noValidate autoComplete="off" onSubmit={handleSubmit(onSubmit)}>
            <div className="flex flex-col gap-6">
              <div className="grid gap-2 relative">
                <Label htmlFor="password">Password</Label>
                <div className="relative">
                  <Input
                    className="placeholder:text-foreground/30"
                    id="password"
                    type={showingPassword ? "text" : "password"}
                    {...register("password")}
                    placeholder="Enter your password"
                    disabled={token === undefined || token === "" || isLoading}
                  />
                  <button
                    type="button"
                    className="absolute right-2 top-1/2 -translate-y-1/2 p-0 h-auto w-auto cursor-pointer transition-all"
                    onClick={() => setShowingPassword((prev) => !prev)}
                    disabled={token === undefined || token === "" || isLoading}
                  >
                    {showingPassword ? (
                      <Eye size={20} />
                    ) : (
                      <EyeClosed size={20} />
                    )}
                  </button>
                </div>
                {errors.password && (
                  <MessageError
                    message={errors.password?.message?.toString()}
                  />
                )}
              </div>
              <div className="grid gap-2 relative">
                <Label htmlFor="password">Confirm Password</Label>
                <div className="relative">
                  <Input
                    className="placeholder:text-foreground/30"
                    id="password_confirmation"
                    type={showingPassword ? "text" : "password"}
                    {...register("passwordConfirmation")}
                    placeholder="Enter your password"
                    disabled={token === undefined || token === "" || isLoading}
                  />
                  <button
                    type="button"
                    className="absolute right-2 top-1/2 -translate-y-1/2 p-0 h-auto w-auto cursor-pointer transition-all"
                    onClick={() => setShowingPassword((prev) => !prev)}
                    disabled={token === undefined || token === "" || isLoading}
                  >
                    {showingPassword ? (
                      <Eye size={20} />
                    ) : (
                      <EyeClosed size={20} />
                    )}
                  </button>
                </div>
                {errors.passwordConfirmation && (
                  <MessageError
                    message={errors.passwordConfirmation?.message?.toString()}
                  />
                )}
              </div>
              <div className="flex flex-col gap-3 mt-1">
                <Button
                  type="submit"
                  className="w-full"
                  disabled={token === undefined || token === "" || isLoading}
                >
                  Reset Password
                </Button>
              </div>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
