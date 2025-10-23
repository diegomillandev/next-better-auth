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

export default function SignUpForm() {
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
          <form noValidate autoComplete="off">
            <div className="flex flex-col gap-7">
              <div className="grid gap-2 relative">
                <Label htmlFor="email">Name</Label>
                <Input
                  className="placeholder:text-foreground/30"
                  id="name"
                  type="name"
                  placeholder="Millan"
                  autoFocus
                />
              </div>
              <div className="grid gap-2 relative">
                <Label htmlFor="email">Email</Label>
                <Input
                  className="placeholder:text-foreground/30"
                  id="email"
                  type="email"
                  placeholder="millan@example.com"
                />
              </div>
              <div className="grid gap-2 relative">
                <Label htmlFor="password">Password</Label>
                <Input
                  className="placeholder:text-foreground/30"
                  id="password"
                  type="password"
                  placeholder="Enter your password"
                />
              </div>
              <div className="grid gap-2 relative">
                <Label htmlFor="password_confirmation">Confirm Password</Label>
                <Input
                  className="placeholder:text-foreground/30"
                  id="password_confirmation"
                  type="password"
                  placeholder="Confirm your password"
                />
              </div>
              <div className="flex flex-col gap-3">
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
