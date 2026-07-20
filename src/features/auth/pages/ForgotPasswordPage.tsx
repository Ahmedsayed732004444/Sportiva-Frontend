import React from "react";
import { AuthLayout } from "@/features/auth/components/AuthLayout";
import { ForgotPasswordForm } from "@/features/auth/components/ForgotPasswordForm";

const ForgotPassword: React.FC = () => {
  return (
    <AuthLayout variant="forgot">
      <ForgotPasswordForm />
    </AuthLayout>
  );
};

export default ForgotPassword;
