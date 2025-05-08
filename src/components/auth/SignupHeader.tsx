
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { 
  CardHeader, 
  CardTitle, 
  CardDescription 
} from "@/components/ui/card";

export function SignupHeader() {
  return (
    <CardHeader>
      <div className="flex items-center mb-2">
        <Link to="/" className="mr-auto">
          <Button variant="ghost" size="sm" className="gap-1">
            <ArrowLeft className="h-4 w-4" />
            Back
          </Button>
        </Link>
      </div>
      <CardTitle className="text-2xl text-center">Sign up for HAJO</CardTitle>
      <CardDescription className="text-center">
        Help A Junior Out - BCA Book Exchange
      </CardDescription>
    </CardHeader>
  );
}
