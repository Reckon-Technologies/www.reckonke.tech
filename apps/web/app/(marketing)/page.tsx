import { GitPullRequestArrow } from "lucide-react";

import { ModeToggle } from "@/components/mode-toggle";
import { DropdownMenuDemo } from "@/components/ui/dropdown-menu-demo";
import { Button } from "@repo/ui/components/button";
import {
  Card,
  CardAction,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@repo/ui/components/card";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col gap-2 items-center justify-center">
      <div className="flex justify-between">
        <ModeToggle />
        <DropdownMenuDemo />
      </div>
      <Card className="w-full max-w-sm">
        <CardHeader>
          <CardTitle>Welcome to Reckon</CardTitle>
          <CardDescription>
            We help company&apos;s go from MVP to MMP
          </CardDescription>
          <CardAction>
            <Button variant="link">Sign Up</Button>
          </CardAction>
        </CardHeader>
        <CardFooter className="flex-col gap-2">
          <Button variant="outline" className="w-full">
            <GitPullRequestArrow />
            {" "}
            New Branch
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
}
