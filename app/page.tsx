import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background">
      <div className="w-full max-w-md space-y-6 p-6">
        <div className="text-center space-y-2">
          <h1 className="text-3xl font-bold">Better Auth Tutorial</h1>
          <p className="text-muted-foreground">
            A simple tutorial to get started with Better Auth in your Next.js
            app.
          </p>
        </div>
        <div className="flex flex-col gap-3">
          <Button asChild>
            <Link href="/signin">Sign In</Link>
          </Button>
          <Button variant="outline" asChild>
            <Link href="/signup">Sign Up</Link>
          </Button>
          <Button variant="secondary" asChild>
            <Link href="/dashboard">Dashboard(Protected)</Link>
          </Button>
        </div>
      </div>
    </div>
  );
}
