
import { Card, CardContent } from "@/components/ui/card";
import { SignupHeader } from "@/components/auth/SignupHeader";
import { SignupForm } from "@/components/auth/SignupForm";
import { SignupFooter } from "@/components/auth/SignupFooter";

const Signup = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-white flex flex-col items-center justify-center p-4">
      <Card className="w-full max-w-md">
        <SignupHeader />
        <CardContent>
          <SignupForm />
        </CardContent>
        <SignupFooter />
      </Card>
    </div>
  );
};

export default Signup;
