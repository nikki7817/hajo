
import { Link } from "react-router-dom";
import { CardFooter } from "@/components/ui/card";

export function SignupFooter() {
  return (
    <CardFooter className="flex flex-col items-center justify-center space-y-2">
      <div className="text-sm text-muted-foreground">
        Already have an account?
        <Link to="/login" className="text-primary font-medium hover:underline">
          Sign in
        </Link>
      </div>

    </CardFooter>
  );
}
