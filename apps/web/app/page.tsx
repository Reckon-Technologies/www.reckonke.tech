import { GitPullRequestArrow } from "lucide-react";

import { ModeToggle } from "@/components/mode-toggle";
import { DropdownMenuDemo } from "@/components/ui/dropdown-menu-demo";
import { Button } from "@repo/ui/components/button";
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@repo/ui/components/card";
import { Input } from "@repo/ui/components/input";
import { Label } from "@repo/ui/components/label";

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
        <CardContent>
          <form>
            <div className="flex flex-col gap-6">
              <div className="grid gap-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="m@example.com"
                  required
                />
              </div>
            </div>
          </form>
        </CardContent>
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
