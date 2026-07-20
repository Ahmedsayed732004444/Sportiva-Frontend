import React from "react";
import { AuthLayout } from "@/features/auth/components/AuthLayout";
import { EmailVerificationForm } from "@/features/auth/components/EmailVerificationForm";

const VerifyEmail: React.FC = () => {
  return (
    <AuthLayout variant="verify">
      <EmailVerificationForm />
    </AuthLayout>
  );
};

export default VerifyEmail;
