"use client";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import { useSession } from "@/lib/auth-client";
import { ArrowLeftToLine } from "lucide-react";
import DashboardSkeleton from "./dashboard-skeleton";

export const Dashboard = () => {
  const { data: session, isPending } = useSession();

  if (isPending) {
    return <DashboardSkeleton />;
  }

  if (!session) {
    return null;
  }

  const handleSignOut = () => {
    // Logic to sign out the user
    console.log("User signed out");
  };
  return (
    <div className="flex items-center justify-center h-screen">
      <Card className="w-full max-w-md">
        <CardHeader className="text-center">
          <CardTitle>Dashboard</CardTitle>
          <CardDescription>Welcome to your dashboard!</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex mb-4 items-center gap-x-2">
            <h3 className="font-semibold">Name:</h3>
            <p className="text-sm font-medium text-muted-foreground">
              {session?.user?.name}
            </p>
          </div>
          <div className="flex mb-4 items-center gap-x-2">
            <h3 className="font-semibold">Email:</h3>
            <p className="text-sm font-medium text-muted-foreground">
              {session?.user?.email}
            </p>
          </div>
        </CardContent>
        <CardFooter>
          <Button
            variant="destructive"
            onClick={handleSignOut}
            className="w-full cursor-pointer"
            type={"button"}
          >
            <ArrowLeftToLine />
            Sign Out
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
};
