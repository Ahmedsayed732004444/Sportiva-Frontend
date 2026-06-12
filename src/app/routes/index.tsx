// src/app/routes/index.tsx
import { Routes, Route, Navigate } from "react-router-dom";
import { useAuth } from "@/features/auth/hooks/useAuth";
import PublicLayout from "@/shared/components/navigation/PublicLayout";
import AppLayout from "@/shared/components/navigation/AppLayout";
import ScrollToTop from "@/shared/components/navigation/ScrollToTop";
import { AuthLayout } from "@/features/auth/components/AuthLayout";
import NotFoundPage from "@/shared/components/NotFoundPage";

// Home
import HomePage from "@/features/home/pages/HomePage";

// Auth
import LoginPage from "@/features/auth/pages/LoginPage";
import RegisterPage from "@/features/auth/pages/RegisterPage";
import ForgotPasswordPage from "@/features/auth/pages/ForgotPasswordPage";
import ResetPasswordPage from "@/features/auth/pages/ResetPasswordPage";
import VerifyEmailPage from "@/features/auth/pages/VerifyEmailPage";
import ConfirmEmailPage from "@/features/auth/pages/ConfirmEmailPage";
import OAuthCallbackPage from "@/features/auth/pages/OAuthCallbackPage";

// Profile
import ProfilePage from "@/features/profile/pages/ProfilePage";
import EditProfilePage from "@/features/profile/pages/EditProfilePage";
import FollowersPage from "@/features/profile/pages/FollowersPage";
import FollowingPage from "@/features/profile/pages/FollowingPage";

// Posts
import PostsPage from "@/features/posts/pages/PostsPage";
import MyPostsPage from "@/features/posts/pages/MyPostsPage";

const MainRouter = () => {
  const { isAuthenticated } = useAuth();

  return (
    <>
      <ScrollToTop />
      <Routes>
        {/* Public */}
        <Route path="/" element={<PublicLayout />}>
          <Route
            index
            element={isAuthenticated ? <Navigate to="/profile" replace /> : <HomePage />}
          />
        </Route>

        {/* Protected */}
        <Route element={<AppLayout />}>
          <Route path="/profile" element={<ProfilePage />} />
          <Route path="/profile/my/followers" element={<FollowersPage />} />
          <Route path="/profile/my/following" element={<FollowingPage />} />
          <Route path="/profile/:userId/followers" element={<FollowersPage />} />
          <Route path="/profile/:userId/following" element={<FollowingPage />} />
          <Route path="/profile/:userId" element={<ProfilePage />} />
          <Route path="/edit-profile" element={<EditProfilePage />} />
          <Route path="/posts" element={<PostsPage />} />
          <Route path="/posts/my" element={<MyPostsPage />} />
        </Route>

        {/* Auth */}
        <Route
          path="/login"
          element={
            isAuthenticated ? (
              <Navigate to="/profile" replace />
            ) : (
              <AuthLayout variant="login">
                <LoginPage />
              </AuthLayout>
            )
          }
        />
        <Route
          path="/register"
          element={
            isAuthenticated ? (
              <Navigate to="/profile" replace />
            ) : (
              <AuthLayout variant="register">
                <RegisterPage />
              </AuthLayout>
            )
          }
        />
        <Route
          path="/forgot-password"
          element={
            <AuthLayout variant="forgot">
              <ForgotPasswordPage />
            </AuthLayout>
          }
        />
        <Route
          path="/auth/forgetPassword"
          element={
            <AuthLayout variant="reset">
              <ResetPasswordPage />
            </AuthLayout>
          }
        />
        <Route
          path="/resetPassword"
          element={
            <AuthLayout variant="reset">
              <ResetPasswordPage />
            </AuthLayout>
          }
        />
        <Route
          path="/emailConfirmation"
          element={
            <AuthLayout variant="verify">
              <VerifyEmailPage />
            </AuthLayout>
          }
        />
        <Route
          path="/auth/emailConfirmation"
          element={
            <AuthLayout variant="verify">
              <ConfirmEmailPage />
            </AuthLayout>
          }
        />
        <Route
          path="/confirm-email"
          element={
            <AuthLayout variant="verify">
              <ConfirmEmailPage />
            </AuthLayout>
          }
        />
        <Route path="/oauth/callback" element={<OAuthCallbackPage />} />

        {/* 404 */}
        <Route path="*" element={<PublicLayout />}>
          <Route index element={<NotFoundPage />} />
        </Route>
      </Routes>
    </>
  );
};

export default MainRouter;
