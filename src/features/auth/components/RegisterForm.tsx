import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { z } from "zod";
import { Button } from "@/shared/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/shared/components/ui/form";
import { Input } from "@/shared/components/ui/input";
import { Checkbox } from "@/shared/components/ui/checkbox";
import { useAuth } from "@/features/auth/hooks/useAuth";
import { EyeIcon, EyeOffIcon, User, Mail, Lock } from "lucide-react";
import { setFormErrors } from "@/lib/api/errors";
import { env } from "@/lib/env";

const registerSchema = z.object({
  firstName: z.string().min(2, "First name must be at least 2 characters"),
  lastName: z.string().min(2, "Last name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  password: z
    .string()
    .min(8, "Password must be at least 8 characters")
    .regex(/[A-Z]/, "Password must contain at least one uppercase letter")
    .regex(/[a-z]/, "Password must contain at least one lowercase letter")
    .regex(/[0-9]/, "Password must contain at least one number")
    .regex(/[\W_]/, "Password must contain at least one special character"),
  agreeToTerms: z.boolean().refine((val) => val === true, {
    message: "You must agree to the Terms of Service and Privacy Policy",
  }),
});

type RegisterFormData = z.infer<typeof registerSchema>;

export const RegisterForm = () => {
  const [showPassword, setShowPassword] = useState(false);
  const { registerAsync, isRegisterLoading } = useAuth();

  const form = useForm<RegisterFormData>({
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    resolver: zodResolver(registerSchema) as any,
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      agreeToTerms: false,
    },
  });

  const onSubmit = async (data: RegisterFormData) => {
    try {
      await registerAsync(data);
    } catch (error) {
      setFormErrors(error, form.setError);
    }
  };

  const handleGoogleLogin = () => {
    const externalLoginUrl = `${env.AUTH_BASE_URL}/auth/google-login`;
    window.location.href = externalLoginUrl;
  };

  return (
    <div className="w-full space-y-3.5 rounded-3xl border border-slate-200/80 bg-white/95 text-slate-900 shadow-xl dark:border-white/10 dark:bg-[#0E1521]/95 dark:text-white p-6 sm:p-7 backdrop-blur-xl my-auto transition-colors duration-300">
      {/* Logo and Header */}
      <div className="flex flex-col items-center justify-center space-y-1 text-center">
        <Link
          to="/"
          className="flex items-center gap-2.5 group hover:opacity-90 transition-opacity"
        >
          {/* Green Hexagon Icon Badge */}
          <div className="relative flex h-9 w-9 items-center justify-center rounded-xl bg-emerald-500/15 border border-emerald-500/30 text-[#20A854] shadow-sm transition-transform group-hover:scale-105">
            <svg className="h-5 w-5 fill-current text-[#20A854]" viewBox="0 0 24 24">
              <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
            </svg>
          </div>
          <div className="text-left">
            <h3 className="text-xl font-black tracking-tight text-slate-900 dark:text-white leading-none">
              Sportiva
            </h3>
            <p className="text-[9px] uppercase font-semibold text-slate-500 dark:text-white/50 tracking-wider mt-0.5">
              Sports Booking & Social Platform
            </p>
          </div>
        </Link>

        <div className="pt-1.5 space-y-0.5">
          <h1 className="text-xl sm:text-2xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Create your account
          </h1>
          <p className="text-xs text-slate-500 dark:text-white/60 font-medium">
            Join the community and start your journey.
          </p>
        </div>
      </div>

      {/* Social Register Button */}
      <div className="grid grid-cols-1 gap-2 pt-0.5">
        <Button
          type="button"
          variant="outline"
          className="w-full border border-slate-200 bg-white text-slate-700 hover:bg-slate-50 shadow-sm dark:border-emerald-500/40 dark:bg-[#151D2A] dark:text-white dark:hover:bg-[#1c2637] h-9 transition-all rounded-xl text-xs font-semibold"
          onClick={handleGoogleLogin}
        >
          <svg className="mr-2 h-3.5 w-3.5" viewBox="0 0 24 24">
            <path
              fill="#4285F4"
              d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
            />
            <path
              fill="#34A853"
              d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
            />
            <path
              fill="#FBBC05"
              d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
            />
            <path
              fill="#EA4335"
              d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
            />
          </svg>
          Sign up with Google
        </Button>
      </div>

      {/* Separator */}
      <div className="relative py-0.5">
        <div className="absolute inset-0 flex items-center">
          <span className="w-full border-t border-slate-200 dark:border-white/10" />
        </div>
        <div className="relative flex justify-center text-[9px] tracking-wider uppercase font-bold">
          <span className="bg-white dark:bg-[#0E1521] px-3 text-[#20A854] transition-colors">
            OR SIGN UP WITH EMAIL
          </span>
        </div>
      </div>

      {/* Form */}
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-2.5">
          {/* First Name & Last Name 2 Columns */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
            <FormField
              control={form.control}
              name="firstName"
              render={({ field }) => (
                <FormItem className="space-y-1">
                  <FormLabel className="text-[11px] font-semibold text-slate-700 dark:text-white/80">
                    First Name
                  </FormLabel>
                  <FormControl>
                    <div className="relative">
                      <User className="pointer-events-none absolute left-3 top-1/2 h-3.5 w-3.5 -translate-y-1/2 text-slate-400 dark:text-white/40" />
                      <Input
                        placeholder="Your first name"
                        className="h-9 rounded-lg border-slate-200 bg-slate-50 pl-9 text-xs text-slate-900 placeholder:text-slate-400 focus:bg-white focus:border-[#20A854] focus:ring-1 focus:ring-[#20A854] dark:border-white/10 dark:bg-[#151D2A] dark:text-white dark:placeholder:text-white/40 transition-all"
                        {...field}
                      />
                    </div>
                  </FormControl>
                  <FormMessage className="text-[11px] text-rose-500" />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="lastName"
              render={({ field }) => (
                <FormItem className="space-y-1">
                  <FormLabel className="text-[11px] font-semibold text-slate-700 dark:text-white/80">
                    Last Name
                  </FormLabel>
                  <FormControl>
                    <div className="relative">
                      <User className="pointer-events-none absolute left-3 top-1/2 h-3.5 w-3.5 -translate-y-1/2 text-slate-400 dark:text-white/40" />
                      <Input
                        placeholder="Your last name"
                        className="h-9 rounded-lg border-slate-200 bg-slate-50 pl-9 text-xs text-slate-900 placeholder:text-slate-400 focus:bg-white focus:border-[#20A854] focus:ring-1 focus:ring-[#20A854] dark:border-white/10 dark:bg-[#151D2A] dark:text-white dark:placeholder:text-white/40 transition-all"
                        {...field}
                      />
                    </div>
                  </FormControl>
                  <FormMessage className="text-[11px] text-rose-500" />
                </FormItem>
              )}
            />
          </div>

          {/* Email Field */}
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem className="space-y-1">
                <FormLabel className="text-[11px] font-semibold text-slate-700 dark:text-white/80">
                  Email
                </FormLabel>
                <FormControl>
                  <div className="relative">
                    <Mail className="pointer-events-none absolute left-3 top-1/2 h-3.5 w-3.5 -translate-y-1/2 text-slate-400 dark:text-white/40" />
                    <Input
                      type="email"
                      placeholder="your.email@example.com"
                      className="h-9 rounded-lg border-slate-200 bg-slate-50 pl-9 text-xs text-slate-900 placeholder:text-slate-400 focus:bg-white focus:border-[#20A854] focus:ring-1 focus:ring-[#20A854] dark:border-white/10 dark:bg-[#151D2A] dark:text-white dark:placeholder:text-white/40 transition-all"
                      {...field}
                    />
                  </div>
                </FormControl>
                <FormMessage className="text-[11px] text-rose-500" />
              </FormItem>
            )}
          />

          {/* Password Field */}
          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem className="space-y-1">
                <FormLabel className="text-[11px] font-semibold text-slate-700 dark:text-white/80">
                  Password
                </FormLabel>
                <FormControl>
                  <div className="relative">
                    <Lock className="pointer-events-none absolute left-3 top-1/2 h-3.5 w-3.5 -translate-y-1/2 text-slate-400 dark:text-white/40" />
                    <Input
                      type={showPassword ? "text" : "password"}
                      placeholder="At least 8 characters"
                      className="h-9 rounded-lg border-slate-200 bg-slate-50 pl-9 pr-10 text-xs text-slate-900 placeholder:text-slate-400 focus:bg-white focus:border-[#20A854] focus:ring-1 focus:ring-[#20A854] dark:border-white/10 dark:bg-[#151D2A] dark:text-white dark:placeholder:text-white/40 transition-all"
                      {...field}
                    />
                    <Button
                      type="button"
                      variant="ghost"
                      size="sm"
                      className="absolute right-0.5 top-0 h-full px-2.5 text-slate-400 hover:text-slate-700 dark:text-white/40 dark:hover:text-white hover:bg-transparent"
                      onClick={() => setShowPassword(!showPassword)}
                      aria-label={showPassword ? "Hide password" : "Show password"}
                    >
                      {showPassword ? (
                        <EyeOffIcon className="h-3.5 w-3.5" />
                      ) : (
                        <EyeIcon className="h-3.5 w-3.5" />
                      )}
                    </Button>
                  </div>
                </FormControl>
                <FormMessage className="text-[11px] text-rose-500" />
              </FormItem>
            )}
          />

          {/* Terms and Conditions Checkbox */}
          <FormField
            control={form.control}
            name="agreeToTerms"
            render={({ field }) => (
              <FormItem className="flex flex-row items-start space-x-2.5 space-y-0 pt-0.5">
                <FormControl>
                  <Checkbox
                    checked={field.value}
                    onCheckedChange={field.onChange}
                    className="border-slate-300 data-[state=checked]:bg-[#20A854] data-[state=checked]:border-[#20A854] dark:border-white/20 mt-0.5"
                  />
                </FormControl>
                <div className="space-y-0.5 leading-tight">
                  <FormLabel className="text-[11px] font-normal text-slate-600 dark:text-white/70">
                    I agree to the{" "}
                    <Link to="/terms" className="text-[#20A854] font-semibold hover:underline">
                      Terms of Service
                    </Link>{" "}
                    and{" "}
                    <Link to="/privacy" className="text-[#20A854] font-semibold hover:underline">
                      Privacy Policy
                    </Link>
                    .
                  </FormLabel>
                  <FormMessage className="text-[11px] text-rose-500" />
                </div>
              </FormItem>
            )}
          />

          {form.formState.errors.root && (
            <div className="rounded-lg bg-destructive/10 border border-destructive/20 p-2.5 text-xs text-rose-500">
              {form.formState.errors.root.message}
            </div>
          )}

          {/* Submit Button */}
          <Button
            type="submit"
            className="w-full bg-[#20A854] text-white hover:bg-[#1b9148] active:scale-[0.99] h-10 rounded-xl text-xs font-bold shadow-md shadow-emerald-500/25 transition-all mt-1"
            disabled={isRegisterLoading}
          >
            {isRegisterLoading ? "Creating Account..." : "Create Account"}
          </Button>
        </form>
      </Form>

      {/* Login Link */}
      <p className="text-center text-[11px] text-slate-500 dark:text-white/60 font-medium pt-0.5">
        Already have an account?{" "}
        <Link to="/login" className="text-[#20A854] font-bold hover:underline">
          Login
        </Link>
      </p>
    </div>
  );
};
