import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";

export default function DashboardSkeleton() {
  return (
    <div className="flex items-center justify-center h-screen">
      <Card className="w-full max-w-md">
        <CardHeader className="text-center items-center flex flex-col">
          <Skeleton className="h-4 w-16" />
          <Skeleton className="h-4 w-36" />
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex items-center gap-x-2">
            <Skeleton className="h-4 w-16" />
            <Skeleton className="h-4 w-40" />
          </div>
          <div className="flex items-center gap-x-2">
            <Skeleton className="h-4 w-16" />
            <Skeleton className="h-4 w-60" />
          </div>
          <Skeleton className="h-8 w-full" />
        </CardContent>
      </Card>
    </div>
  );
}
