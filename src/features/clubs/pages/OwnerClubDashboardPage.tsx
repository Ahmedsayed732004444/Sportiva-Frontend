import { useState } from "react";
import { useParams, Link } from "react-router-dom";
import { useGetClub } from "@/features/clubs/hooks/useClubs";
import {
  useGetActiveSubscription,
  useGetSubscriptionHistory,
  useRenewSubscription,
} from "@/features/subscriptions/hooks/useClubSubscriptions";
import { SubscribeModal } from "@/features/subscriptions/components/SubscribeModal";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/shared/components/ui/card";
import { Button } from "@/shared/components/ui/button";
import { Skeleton } from "@/shared/components/ui/skeleton";
import { Badge } from "@/shared/components/ui/badge";
import {
  ArrowLeft,
  Building,
  CreditCard,
  Calendar,
  Award,
  RefreshCw,
  Plus,
} from "lucide-react";

export default function OwnerClubDashboardPage() {
  const { clubId } = useParams<{ clubId: string }>();
  const [activeTab, setActiveTab] = useState<"overview" | "subscription">("overview");
  const [isSubModalOpen, setIsSubModalOpen] = useState(false);

  // Queries
  const { data: club, isLoading: isClubLoading, isError: isClubError } = useGetClub(clubId as string);
  const {
    data: activeSub,
    isLoading: isActiveSubLoading,
    isError: isActiveSubError,
    error: activeSubError,
  } = useGetActiveSubscription(clubId as string);
  const { data: subHistory, isLoading: isHistoryLoading } = useGetSubscriptionHistory(clubId as string);

  // Mutations
  const renewSub = useRenewSubscription();

  if (isClubLoading) {
    return (
      <div className="container mx-auto py-8 px-4 max-w-7xl space-y-6">
        <Skeleton className="h-8 w-48" />
        <Skeleton className="h-32 w-full" />
      </div>
    );
  }

  if (isClubError || !club) {
    return (
      <div className="container mx-auto py-8 px-4 text-center max-w-md">
        <h2 className="text-2xl font-bold text-destructive mb-2">Club Not Found</h2>
        <p className="text-muted-foreground mb-4">Could not retrieve the details for this club.</p>
        <Button asChild variant="outline">
          <Link to="/owner/clubs">Back to My Clubs</Link>
        </Button>
      </div>
    );
  }

  const handleRenew = async () => {
    if (confirm("Are you sure you want to renew your active subscription?")) {
      try {
        await renewSub.mutateAsync(clubId as string);
      } catch (e) {
        console.error(e);
      }
    }
  };

  // Check if error status is 404
  const isNoSubscription =
    isActiveSubError && (activeSubError as any)?.response?.status === 404;

  return (
    <div className="container mx-auto py-8 px-4 max-w-7xl space-y-8">
      {/* Header */}
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between border-b pb-6">
        <div className="flex items-center gap-4">
          <Button asChild variant="ghost" size="icon" className="h-10 w-10">
            <Link to="/clubs">
              <ArrowLeft className="h-5 w-5" />
            </Link>
          </Button>
          <div>
            <h1 className="text-3xl font-bold tracking-tight text-foreground flex items-center gap-2">
              {club.name}
              <Badge variant={club.isActive ? "default" : "destructive"}>
                {club.isActive ? "Active" : "Inactive"}
              </Badge>
            </h1>
            <p className="text-muted-foreground mt-1 text-sm">Owner Club Dashboard &bull; Manage your club's subscription.</p>
          </div>
        </div>
      </div>

      {/* Tabs list */}
      <div className="flex border-b border-muted">
        <button
          onClick={() => setActiveTab("overview")}
          className={`flex items-center gap-2 px-6 py-3 border-b-2 font-medium transition-all ${
            activeTab === "overview"
              ? "border-primary text-primary"
              : "border-transparent text-muted-foreground hover:text-foreground"
          }`}
        >
          <Building className="h-4 w-4" /> Overview
        </button>
        <button
          onClick={() => setActiveTab("subscription")}
          className={`flex items-center gap-2 px-6 py-3 border-b-2 font-medium transition-all ${
            activeTab === "subscription"
              ? "border-primary text-primary"
              : "border-transparent text-muted-foreground hover:text-foreground"
          }`}
        >
          <CreditCard className="h-4 w-4" /> Subscription
        </button>
      </div>

      {/* Tab Contents */}
      {activeTab === "overview" && (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card className="md:col-span-2">
            <CardHeader>
              <CardTitle>Active Subscription</CardTitle>
              <CardDescription>Details of your currently active membership plan.</CardDescription>
            </CardHeader>
            <CardContent>
              {isActiveSubLoading ? (
                <div className="space-y-4">
                  <Skeleton className="h-6 w-1/3" />
                  <Skeleton className="h-10 w-full" />
                </div>
              ) : isNoSubscription ? (
                <div className="text-center py-8 space-y-4">
                  <p className="text-muted-foreground">Your club does not have an active subscription.</p>
                  <Button onClick={() => setIsSubModalOpen(true)}>
                    <Plus className="mr-2 h-4 w-4" /> Subscribe Now
                  </Button>
                </div>
              ) : activeSub ? (
                <div className="space-y-6">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 bg-primary/5 p-6 rounded-xl border border-primary/20">
                    <div className="space-y-1">
                      <p className="text-xs text-primary font-bold uppercase tracking-wider">Current Plan</p>
                      <h3 className="text-2xl font-extrabold text-foreground">{activeSub.plan.name}</h3>
                      <p className="text-sm text-muted-foreground">Allowed Courts: <strong>{activeSub.plan.maxCourts}</strong></p>
                    </div>
                    <div className="text-left sm:text-right">
                      <p className="text-2xl font-black text-foreground">${activeSub.plan.price}</p>
                      <p className="text-xs text-muted-foreground">Paid on {new Date(activeSub.startDate).toLocaleDateString()}</p>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div className="flex items-center gap-2 p-3 bg-muted rounded-lg">
                      <Calendar className="h-4 w-4 text-primary" />
                      <div>
                        <p className="text-xs text-muted-foreground">Start Date</p>
                        <p className="font-semibold">{new Date(activeSub.startDate).toLocaleDateString()}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-2 p-3 bg-muted rounded-lg">
                      <Calendar className="h-4 w-4 text-primary" />
                      <div>
                        <p className="text-xs text-muted-foreground">End Date</p>
                        <p className="font-semibold">{new Date(activeSub.endDate).toLocaleDateString()}</p>
                      </div>
                    </div>
                  </div>

                  <div className="flex justify-end gap-2">
                    <Button variant="outline" onClick={() => setIsSubModalOpen(true)}>
                      Change Plan
                    </Button>
                    <Button onClick={handleRenew} disabled={renewSub.isPending}>
                      <RefreshCw className="mr-2 h-4 w-4" /> Renew Subscription
                    </Button>
                  </div>
                </div>
              ) : (
                <div className="text-center py-8 text-destructive">
                  Error loading subscription details.
                </div>
              )}
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Usage Limits</CardTitle>
              <CardDescription>Club resources utilization.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">Courts created:</span>
                  <span className="font-semibold">
                    {club.courtsCount || 0} / {activeSub ? activeSub.plan.maxCourts : "0"}
                  </span>
                </div>
                <div className="w-full bg-muted rounded-full h-2">
                  <div
                    className="bg-primary h-2 rounded-full"
                    style={{
                      width: `${Math.min(
                        ((club.courtsCount || 0) / (activeSub ? activeSub.plan.maxCourts : 1)) * 100,
                        100
                      )}%`,
                    }}
                  />
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      )}

      {activeTab === "subscription" && (
        <Card>
          <CardHeader className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <CardTitle>Subscription History</CardTitle>
              <CardDescription>A record of all your subscriptions and payments.</CardDescription>
            </div>
            {isNoSubscription && (
              <Button onClick={() => setIsSubModalOpen(true)}>
                <Plus className="mr-2 h-4 w-4" /> Subscribe Now
              </Button>
            )}
          </CardHeader>
          <CardContent>
            {isHistoryLoading ? (
              <div className="space-y-2">
                <Skeleton className="h-10 w-full" />
                <Skeleton className="h-10 w-full" />
              </div>
            ) : !subHistory?.items || subHistory.items.length === 0 ? (
              <div className="text-center py-8 text-muted-foreground">
                No subscription history found.
              </div>
            ) : (
              <div className="border rounded-lg overflow-x-auto">
                <table className="w-full text-sm text-left">
                  <thead className="bg-muted text-muted-foreground text-xs uppercase">
                    <tr>
                      <th className="p-4">Plan Name</th>
                      <th className="p-4">Price</th>
                      <th className="p-4">Start Date</th>
                      <th className="p-4">End Date</th>
                      <th className="p-4">Status</th>
                    </tr>
                  </thead>
                  <tbody>
                    {subHistory.items.map((sub) => (
                      <tr key={sub.subscriptionId} className="border-b bg-card">
                        <td className="p-4 font-semibold">{sub.plan.name}</td>
                        <td className="p-4">${sub.plan.price}</td>
                        <td className="p-4">{new Date(sub.startDate).toLocaleDateString()}</td>
                        <td className="p-4">{new Date(sub.endDate).toLocaleDateString()}</td>
                        <td className="p-4">
                          <Badge variant={sub.isActive ? "default" : "secondary"}>
                            {sub.isActive ? "Active" : "Expired"}
                          </Badge>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}
          </CardContent>
        </Card>
      )}

      {/* Subscribe Modal */}
      <SubscribeModal
        isOpen={isSubModalOpen}
        onClose={() => setIsSubModalOpen(false)}
        clubId={club.clubId}
        clubName={club.name}
      />
    </div>
  );
}
