import React, { useEffect, useState } from "react";
import { useSearchParams, useNavigate } from "react-router-dom";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/shared/components/ui/card";
import { Button } from "@/shared/components/ui/button";
import { Input } from "@/shared/components/ui/input";
import { Label } from "@/shared/components/ui/label";
import { CheckCircle2, XCircle, Mail, Loader2 } from "lucide-react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { resendConfirmationEmailSchema } from "@/features/auth/schemas/authSchemas";
import { useConfirmEmail, useResendConfirmEmail } from "@/features/auth/hooks/useAuthMutations";

const ConfirmEmailPage: React.FC = () => {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const confirmEmail = useConfirmEmail();
  const resendEmail = useResendConfirmEmail();
  const [showEmailInput, setShowEmailInput] = useState(false);

  const userId = searchParams.get("userId");
  const code = searchParams.get("code");

  const resendForm = useForm<{ email: string }>({
    resolver: zodResolver(resendConfirmationEmailSchema),
    defaultValues: {
      email: "",
    },
  });

  useEffect(() => {
    // Only attempt confirmation if we have both userId and token
    if (
      userId &&
      code &&
      !confirmEmail.isSuccess &&
      !confirmEmail.isError &&
      !confirmEmail.isPending
    ) {
      confirmEmail.mutate({ userId: userId, code: code });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [userId, code]);

  // Redirect on success
  useEffect(() => {
    if (confirmEmail.isSuccess) {
      const timer = setTimeout(() => {
        navigate("/profile");
      }, 2000);
      return () => clearTimeout(timer);
    }
  }, [confirmEmail.isSuccess, navigate]);

  // Show loading state while confirming
  if (confirmEmail.isPending) {
    return (
      <div className="min-h-[calc(100vh-4rem-4.5rem)] bg-muted/30 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto w-full">
          <Card className="w-full max-w-md mx-auto border-0 shadow-lg">
            <CardHeader className="text-center">
              <div className="flex justify-center mb-4">
                <Loader2 className="h-12 w-12 text-primary animate-spin" />
                {/* ✅ theme: text-[var(--purple)] → text-primary */}
              </div>
              <CardTitle className="text-2xl">Confirming Email</CardTitle>
              <CardDescription>Please wait while we verify your email address...</CardDescription>
            </CardHeader>
          </Card>
        </div>
      </div>
    );
  }

  // Show success state
  if (confirmEmail.isSuccess) {
    return (
      <div className="min-h-[calc(100vh-4rem-4.5rem)] bg-muted/30 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto w-full">
          <Card className="w-full max-w-md mx-auto border-0 shadow-lg">
            <CardHeader className="text-center">
              <div className="flex justify-center mb-4">
                <div className="rounded-full bg-primary/10 p-3">
                  {/* ✅ theme: bg-green-100 dark:bg-green-900/20 → bg-primary/10 */}
                  <CheckCircle2 className="h-12 w-12 text-primary" />
                  {/* ✅ theme: text-green-600 dark:text-green-400 → text-primary */}
                </div>
              </div>
              <CardTitle className="text-2xl text-primary">
                {/* ✅ theme: text-green-600 dark:text-green-400 → text-primary */}
                Email Confirmed!
              </CardTitle>
              <CardDescription>
                Your email has been successfully confirmed. Redirecting you to projects...
              </CardDescription>
            </CardHeader>
          </Card>
        </div>
      </div>
    );
  }

  // Show error state
  if (confirmEmail.isError || !userId || !code) {
    return (
      <div className="min-h-[calc(100vh-4rem-4.5rem)] bg-muted/30 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto w-full">
          <Card className="w-full max-w-md mx-auto border-0 shadow-lg">
            <CardHeader className="text-center">
              <div className="flex justify-center mb-4">
                <div className="rounded-full bg-destructive/10 p-3">
                  {/* ✅ theme: bg-red-100 dark:bg-red-900/20 → bg-destructive/10 */}
                  <XCircle className="h-12 w-12 text-destructive" />
                  {/* ✅ theme: text-red-600 dark:text-red-400 → text-destructive */}
                </div>
              </div>
              <CardTitle className="text-2xl text-destructive">
                {/* ✅ theme: text-red-600 dark:text-red-400 → text-destructive */}
                Confirmation Failed
              </CardTitle>
              <CardDescription>
                {!userId || !code
                  ? "Invalid confirmation link. Please check your email and try again."
                  : "We couldn't confirm your email. The link may have expired or is invalid."}
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              {!showEmailInput ? (
                <Button
                  onClick={() => setShowEmailInput(true)}
                  className="w-full bg-primary text-primary-foreground hover:bg-primary/90" // ✅ theme: bg-[var(--purple)]→bg-primary, text-[var(--purple-foreground)]→text-primary-foreground
                >
                  <Mail className="mr-2 h-4 w-4" />
                  Resend Confirmation Email
                </Button>
              ) : (
                <form
                  onSubmit={resendForm.handleSubmit((data) => {
                    resendEmail.mutate(
                      {
                        email: data.email,
                      },
                      {
                        onSuccess: () => {
                          setShowEmailInput(false);
                          resendForm.reset();
                        },
                      }
                    );
                  })}
                  className="space-y-4"
                >
                  <div className="space-y-2">
                    <Label htmlFor="email">Email Address</Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="Enter your email address"
                      {...resendForm.register("email")}
                      disabled={resendEmail.isPending}
                    />
                    {resendForm.formState.errors.email && (
                      <p className="text-sm text-destructive">
                        {/* ✅ theme: text-red-600 dark:text-red-400 → text-destructive */}
                        {resendForm.formState.errors.email.message}
                      </p>
                    )}
                  </div>
                  <div className="flex gap-2">
                    <Button
                      type="submit"
                      disabled={resendEmail.isPending}
                      className="flex-1 bg-primary text-primary-foreground hover:bg-primary/90" // ✅ theme: bg-[var(--purple)]→bg-primary, text-[var(--purple-foreground)]→text-primary-foreground
                    >
                      {resendEmail.isPending ? (
                        <>
                          <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                          Sending...
                        </>
                      ) : (
                        <>
                          <Mail className="mr-2 h-4 w-4" />
                          Send
                        </>
                      )}
                    </Button>
                    <Button
                      type="button"
                      variant="outline"
                      onClick={() => {
                        setShowEmailInput(false);
                        resendForm.reset();
                      }}
                      disabled={resendEmail.isPending}
                    >
                      Cancel
                    </Button>
                  </div>
                </form>
              )}
              <Button
                variant="outline"
                onClick={() => navigate("/profile/settings")}
                className="w-full"
              >
                Back to Settings
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    );
  }

  return null;
};

export default ConfirmEmailPage;
