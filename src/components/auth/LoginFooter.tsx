
import { Link } from "react-router-dom";
import { CardFooter } from "@/components/ui/card";

export function LoginFooter() {
  return (
    <CardFooter className="flex flex-col items-center justify-center space-y-2">
      <div className="text-sm text-muted-foreground">
        Don't have an account?{" "}
        <Link to="/signup" className="text-primary font-medium hover:underline">
          Sign up
        </Link>
      </div>
    </CardFooter>
  );
}
