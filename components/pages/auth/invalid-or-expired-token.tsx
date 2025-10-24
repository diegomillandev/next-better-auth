import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { TriangleAlert } from "lucide-react";

export default function InvalidOrExpiredToken() {
  return (
    <div className="flex items-center justify-center">
      <Card className="w-full max-w-md">
        <CardHeader className="flex flex-col items-center">
          <TriangleAlert className="w-12 h-12 text-destructive mb-2" />
          <CardTitle className="text-center text-destructive text-xl font-semibold">
            Password Reset Issue
          </CardTitle>
        </CardHeader>
        <CardContent className="text-center space-y-4">
          <p className="text-destructive/80 font-medium">
            The password reset link is invalid or has expired.
          </p>
          <Button asChild variant="secondary" className="w-full">
            <a href="/forgot-password">Request a new reset link</a>
          </Button>
        </CardContent>
      </Card>
    </div>
  );
}
