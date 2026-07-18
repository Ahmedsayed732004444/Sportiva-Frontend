// src/app/routes/index.tsx
import { Routes, Route, Navigate } from "react-router-dom";
import { useAuth } from "@/features/auth/hooks/useAuth";
import PublicLayout from "@/shared/components/navigation/PublicLayout";
import AppLayout from "@/shared/components/navigation/AppLayout";
import ScrollToTop from "@/shared/components/navigation/ScrollToTop";
import { AuthLayout } from "@/features/auth/components/AuthLayout";
import NotFoundPage from "@/shared/components/NotFoundPage";
import UnauthorizedPage from "@/shared/components/UnauthorizedPage";
import { RoleProtectedRoute } from "@/features/auth/components/RoleProtectedRoute";
import { UserRole } from "@/features/auth/types/auth";

// Clubs
import ClubsPage from "@/features/clubs/pages/ClubsPage";
import ClubDetailsPage from "@/features/clubs/pages/ClubDetailsPage";
import OwnerClubDashboardPage from "@/features/clubs/pages/OwnerClubDashboardPage";
import CourtsPage from "@/features/clubs/pages/CourtsPage";
import CourtDetailsPage from "@/features/clubs/pages/CourtDetailsPage";

// Subscriptions
import PlansPage from "@/features/subscriptions/pages/PlansPage";
import AdminPlansPage from "@/features/subscriptions/pages/AdminPlansPage";

// Bookings
import BookingsPage from "@/features/bookings/pages/BookingsPage";

// Memberships
import AdminUpgradeRequestsPage from "@/features/memberships/pages/AdminUpgradeRequestsPage";

// Friendly Matches
import MatchesPage from "@/features/matches/pages/MatchesPage";
import MatchDetailsPage from "@/features/matches/pages/MatchDetailsPage";

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

          {/* Public Clubs Routes (inside AppLayout to show navbar) */}
          <Route path="/clubs" element={<ClubsPage />} />
          <Route path="/clubs/:clubId" element={<ClubDetailsPage />} />
          <Route path="/clubs/:clubId/courts/:courtId" element={<CourtDetailsPage />} />
          <Route path="/courts" element={<CourtsPage />} />
          <Route path="/plans" element={<PlansPage />} />
          <Route path="/bookings" element={<BookingsPage />} />
          <Route path="/matches" element={<MatchesPage />} />
          <Route path="/matches/:matchId" element={<MatchDetailsPage />} />

          {/* Owner Protected Routes */}
          <Route element={<RoleProtectedRoute allowedRoles={[UserRole.Owner]} />}>
            <Route path="/owner/clubs/:clubId/dashboard" element={<OwnerClubDashboardPage />} />
          </Route>

          {/* Admin Protected Routes */}
          <Route element={<RoleProtectedRoute allowedRoles={[UserRole.Admin]} />}>
            <Route path="/admin/plans" element={<AdminPlansPage />} />
            <Route path="/admin/membership-requests" element={<AdminUpgradeRequestsPage />} />
          </Route>
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

        {/* 404 & Unauthorized */}
        <Route path="*" element={<PublicLayout />}>
          <Route index element={<NotFoundPage />} />
        </Route>
        <Route path="/unauthorized" element={<PublicLayout />}>
          <Route index element={<UnauthorizedPage />} />
        </Route>
      </Routes>
    </>
  );
};

export default MainRouter;
