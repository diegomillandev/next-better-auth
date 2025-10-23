"use client";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { ArrowLeftToLine } from "lucide-react";

export const Dashboard = () => {
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
              John Doe
            </p>
          </div>
          <div className="flex mb-4 items-center gap-x-2">
            <h3 className="font-semibold">Email:</h3>
            <p className="text-sm font-medium text-muted-foreground">
              correo@correo.com
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
