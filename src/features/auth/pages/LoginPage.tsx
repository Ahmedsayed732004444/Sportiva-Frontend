import React from "react";
import { AuthLayout } from "@/features/auth/components/AuthLayout";
import { LoginForm } from "@/features/auth/components/LoginForm";

const Login: React.FC = () => {
  return (
    <AuthLayout variant="login">
      <LoginForm />
    </AuthLayout>
  );
};

export default Login;
