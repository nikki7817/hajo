
import { Card, CardContent } from "@/components/ui/card";
import { LoginForm } from "@/components/auth/LoginForm";
import { LoginHeader } from "@/components/auth/LoginHeader";
import { LoginFooter } from "@/components/auth/LoginFooter";

const Login = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-white flex flex-col items-center justify-center p-4">
      <Card className="w-full max-w-md">
        <LoginHeader />
        <CardContent>
          <LoginForm />
        </CardContent>
        <LoginFooter />
      </Card>
    </div>
  );
};

export default Login;
