import React from "react";
import { AuthLayout } from "@/features/auth/components/AuthLayout";
import { RegisterForm } from "@/features/auth/components/RegisterForm";

const Register: React.FC = () => {
  return (
    <AuthLayout variant="register">
      <RegisterForm />
    </AuthLayout>
  );
};

export default Register;
