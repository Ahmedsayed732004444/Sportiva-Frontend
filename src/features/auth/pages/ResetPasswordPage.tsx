import React from "react";
import { AuthLayout } from "@/features/auth/components/AuthLayout";
import { ResetPasswordForm } from "@/features/auth/components/ResetPasswordForm";

const ResetPassword: React.FC = () => {
  return (
    <AuthLayout variant="reset">
      <ResetPasswordForm />
    </AuthLayout>
  );
};

export default ResetPassword;
