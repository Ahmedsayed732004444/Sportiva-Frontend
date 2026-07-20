import { useState } from "react";
import { useParams, Link } from "react-router-dom";
import { useGetClub } from "@/features/clubs/hooks/useClubs";
import {
  useGetActiveSubscription,
  useGetSubscriptionHistory,
  useRenewSubscription,
} from "@/features/subscriptions/hooks/useClubSubscriptions";
import {
  useGetClubCourts,
  useDeleteCourt,
  useToggleCourtStatus,
} from "@/features/clubs/hooks/useCourts";
import { SubscribeModal } from "@/features/subscriptions/components/SubscribeModal";
import { CourtFormModal } from "@/features/clubs/components/CourtFormModal";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/shared/components/ui/card";
import { Button } from "@/shared/components/ui/button";
import { Skeleton } from "@/shared/components/ui/skeleton";
import { Badge } from "@/shared/components/ui/badge";
import { ConfirmDialog } from "@/shared/components/common/ConfirmDialog";
import { EmptyState } from "@/shared/components/common/EmptyState";
import {
  ArrowLeft,
  Building,
  CreditCard,
  Calendar,
  Award,
  RefreshCw,
  Plus,
  LayoutGrid,
  Users,
  DollarSign,
  Pencil,
  Trash2,
  Power,
} from "lucide-react";
import { toast } from "sonner";
import type { CourtResponse } from "@/features/clubs/types/clubs";

export default function OwnerClubDashboardPage() {
  const { clubId } = useParams<{ clubId: string }>();
  const [activeTab, setActiveTab] = useState<"overview" | "courts" | "subscription">("overview");
  const [isSubModalOpen, setIsSubModalOpen] = useState(false);
  const [showRenewConfirm, setShowRenewConfirm] = useState(false);

  // Court Modal States
  const [isCourtModalOpen, setIsCourtModalOpen] = useState(false);
  const [editingCourt, setEditingCourt] = useState<CourtResponse | null>(null);
  const [deletingCourtId, setDeletingCourtId] = useState<string | null>(null);

  // Queries
  const {
    data: club,
    isLoading: isClubLoading,
    isError: isClubError,
    refetch: refetchClub,
    isFetching: isClubFetching,
  } = useGetClub(clubId as string);

  const {
    data: activeSub,
    isLoading: isActiveSubLoading,
    isError: isActiveSubError,
    error: activeSubError,
    refetch: refetchActiveSub,
    isFetching: isActiveSubFetching,
  } = useGetActiveSubscription(clubId as string);

  const { data: subHistory, isLoading: isHistoryLoading } = useGetSubscriptionHistory(
    clubId as string
  );

  const { data: clubCourtsData, isLoading: isCourtsLoading } = useGetClubCourts(clubId as string);

  // Mutations
  const renewSub = useRenewSubscription();
  const deleteCourt = useDeleteCourt();
  const toggleStatus = useToggleCourtStatus();

  if (isClubLoading) {
    return (
      <div className="container mx-auto max-w-6xl space-y-6 px-4 py-6">
        <Skeleton className="h-8 w-48" />
        <Skeleton className="h-32 w-full" />
      </div>
    );
  }

  if (isClubError || !club) {
    return (
      <div className="container mx-auto max-w-6xl space-y-6 px-4 py-6">
        <EmptyState
          icon={Building}
          title="Club not found"
          description="Could not retrieve the details for this club."
          action={
            <div className="flex flex-wrap justify-center gap-2">
              <Button
                variant="outline"
                onClick={() => refetchClub()}
                disabled={isClubFetching}
                className="min-h-11"
              >
                {isClubFetching ? "Retrying…" : "Try again"}
              </Button>
              <Button asChild className="min-h-11">
                <Link to="/clubs">Back to My Clubs</Link>
              </Button>
            </div>
          }
        />
      </div>
    );
  }

  const handleRenew = async () => {
    await renewSub.mutateAsync(clubId as string);
  };

  const handleOpenAddCourt = () => {
    // Check usage limits if active subscription is present
    if (activeSub && activeSub.plan) {
      const courtsCreated = clubCourtsData?.items?.length || club.courtsCount || 0;
      if (courtsCreated >= activeSub.plan.maxCourts) {
        toast.error(
          `You have reached your limit of ${activeSub.plan.maxCourts} courts for the current ${activeSub.plan.name} plan. Please upgrade your subscription.`
        );
        setIsSubModalOpen(true);
        return;
      }
    }
    setEditingCourt(null);
    setIsCourtModalOpen(true);
  };

  const handleDeleteCourtConfirm = async () => {
    if (deletingCourtId) {
      await deleteCourt.mutateAsync({ clubId: club.clubId, courtId: deletingCourtId });
      setDeletingCourtId(null);
    }
  };

  // Check if error status is 404
  const isNoSubscription =
    isActiveSubError &&
    (activeSubError as unknown as { response?: { status?: number } })?.response?.status === 404;

  return (
    <div className="container mx-auto max-w-6xl space-y-8 px-4 py-6">
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
            <p className="text-muted-foreground mt-1 text-sm">
              Owner Club Dashboard &bull; Manage your club's subscription and courts.
            </p>
          </div>
        </div>

        {/* Action Button: Add Court */}
        <Button
          onClick={handleOpenAddCourt}
          className="bg-[#20A854] hover:bg-[#1b9148] text-white font-bold rounded-xl shadow-md shadow-emerald-500/20"
        >
          <Plus className="mr-2 h-4 w-4" /> Add New Court
        </Button>
      </div>

      {/* Tabs list */}
      <div className="flex border-b border-muted overflow-x-auto">
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
          onClick={() => setActiveTab("courts")}
          className={`flex items-center gap-2 px-6 py-3 border-b-2 font-medium transition-all ${
            activeTab === "courts"
              ? "border-primary text-primary"
              : "border-transparent text-muted-foreground hover:text-foreground"
          }`}
        >
          <LayoutGrid className="h-4 w-4" /> Courts (
          {clubCourtsData?.items?.length || club.courtsCount || 0})
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
                  <p className="text-muted-foreground">
                    Your club does not have an active subscription.
                  </p>
                  <Button onClick={() => setIsSubModalOpen(true)}>
                    <Plus className="mr-2 h-4 w-4" /> Subscribe Now
                  </Button>
                </div>
              ) : activeSub ? (
                <div className="space-y-6">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 bg-primary/5 p-6 rounded-xl border border-primary/20">
                    <div className="space-y-1">
                      <p className="text-xs text-primary font-bold uppercase tracking-wider">
                        Current Plan
                      </p>
                      <h3 className="text-2xl font-extrabold text-foreground">
                        {activeSub.plan.name}
                      </h3>
                      <p className="text-sm text-muted-foreground">
                        Allowed Courts: <strong>{activeSub.plan.maxCourts}</strong>
                      </p>
                    </div>
                    <div className="text-left sm:text-right">
                      <p className="text-2xl font-black text-foreground">${activeSub.plan.price}</p>
                      <p className="text-xs text-muted-foreground">
                        Paid on {new Date(activeSub.startDate).toLocaleDateString()}
                      </p>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div className="flex items-center gap-2 p-3 bg-muted rounded-lg">
                      <Calendar className="h-4 w-4 text-primary" />
                      <div>
                        <p className="text-xs text-muted-foreground">Start Date</p>
                        <p className="font-semibold">
                          {new Date(activeSub.startDate).toLocaleDateString()}
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center gap-2 p-3 bg-muted rounded-lg">
                      <Calendar className="h-4 w-4 text-primary" />
                      <div>
                        <p className="text-xs text-muted-foreground">End Date</p>
                        <p className="font-semibold">
                          {new Date(activeSub.endDate).toLocaleDateString()}
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="flex justify-end gap-2">
                    <Button variant="outline" onClick={() => setIsSubModalOpen(true)}>
                      Change Plan
                    </Button>
                    <Button onClick={() => setShowRenewConfirm(true)} disabled={renewSub.isPending}>
                      <RefreshCw className="mr-2 h-4 w-4" /> Renew Subscription
                    </Button>
                  </div>
                </div>
              ) : (
                <EmptyState
                  icon={CreditCard}
                  title="Couldn't load subscription"
                  description="Something went wrong while fetching your active subscription."
                  action={
                    <Button
                      variant="outline"
                      onClick={() => refetchActiveSub()}
                      disabled={isActiveSubFetching}
                      className="min-h-11"
                    >
                      {isActiveSubFetching ? "Retrying…" : "Try again"}
                    </Button>
                  }
                />
              )}
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Usage Limits</CardTitle>
              <CardDescription>Club resources utilization.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-5">
              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">Courts created:</span>
                  <span className="font-semibold">
                    {clubCourtsData?.items?.length || club.courtsCount || 0} /{" "}
                    {activeSub ? activeSub.plan.maxCourts : "0"}
                  </span>
                </div>
                <div className="w-full bg-muted rounded-full h-2">
                  <div
                    className="bg-primary h-2 rounded-full"
                    style={{
                      width: `${Math.min(
                        ((clubCourtsData?.items?.length || club.courtsCount || 0) /
                          (activeSub ? activeSub.plan.maxCourts : 1)) *
                          100,
                        100
                      )}%`,
                    }}
                  />
                </div>
              </div>

              <Button
                onClick={handleOpenAddCourt}
                className="w-full bg-[#20A854] hover:bg-[#1b9148] text-white font-bold rounded-xl shadow-md shadow-emerald-500/20"
              >
                <Plus className="mr-2 h-4 w-4" /> Add New Court
              </Button>
            </CardContent>
          </Card>
        </div>
      )}

      {/* ── 2. Courts Management Tab ── */}
      {activeTab === "courts" && (
        <div className="space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 bg-card p-6 rounded-2xl border">
            <div>
              <h3 className="text-xl font-bold text-foreground">Club Courts Management</h3>
              <p className="text-sm text-muted-foreground mt-0.5">
                Manage your courts, set hourly rates, edit details, or add new sports facilities.
              </p>
            </div>
            <Button
              onClick={handleOpenAddCourt}
              className="bg-[#20A854] hover:bg-[#1b9148] text-white font-bold rounded-xl shadow-md shrink-0"
            >
              <Plus className="mr-2 h-4 w-4" /> Create New Court
            </Button>
          </div>

          {isCourtsLoading ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <Skeleton className="h-64 w-full rounded-2xl" />
              <Skeleton className="h-64 w-full rounded-2xl" />
              <Skeleton className="h-64 w-full rounded-2xl" />
            </div>
          ) : !clubCourtsData?.items || clubCourtsData.items.length === 0 ? (
            <EmptyState
              icon={LayoutGrid}
              title="No courts added yet"
              description="Start adding courts to your club so players can discover and book slots."
              action={
                <Button
                  onClick={handleOpenAddCourt}
                  className="bg-[#20A854] hover:bg-[#1b9148] text-white font-bold rounded-xl min-h-11"
                >
                  <Plus className="mr-2 h-4 w-4" /> Add First Court
                </Button>
              }
            />
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {clubCourtsData.items.map((court) => (
                <Card
                  key={court.courtId}
                  className="overflow-hidden border rounded-2xl bg-card hover:shadow-lg transition-all flex flex-col justify-between"
                >
                  <div className="relative h-44 bg-muted overflow-hidden">
                    {court.imageUrl ? (
                      <img
                        src={court.imageUrl}
                        alt={court.name}
                        className="w-full h-full object-cover"
                      />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center bg-emerald-500/10 text-[#20A854]">
                        <LayoutGrid className="h-12 w-12" />
                      </div>
                    )}
                    <Badge
                      variant={court.isActive ? "default" : "secondary"}
                      className="absolute top-3 right-3 font-semibold shadow-md"
                    >
                      {court.isActive ? "Active" : "Inactive"}
                    </Badge>
                  </div>

                  <CardContent className="p-5 space-y-3 flex-1 flex flex-col justify-between">
                    <div>
                      <h4 className="text-lg font-bold text-foreground">{court.name}</h4>
                      <p className="text-xs text-muted-foreground line-clamp-2 mt-1">
                        {court.description || "No description provided."}
                      </p>
                    </div>

                    <div className="grid grid-cols-2 gap-2 text-xs pt-3 border-t">
                      <div className="flex items-center gap-1.5 text-muted-foreground">
                        <Users className="h-3.5 w-3.5 text-primary" />
                        <span>
                          Capacity: <strong>{court.maxCapacity} players</strong>
                        </span>
                      </div>
                      <div className="flex items-center gap-1.5 text-muted-foreground">
                        <DollarSign className="h-3.5 w-3.5 text-emerald-500" />
                        <span>
                          Price: <strong>${court.pricePerHour}/hr</strong>
                        </span>
                      </div>
                    </div>

                    <div className="flex items-center justify-between gap-2 pt-3 border-t">
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() =>
                          toggleStatus.mutate({ clubId: club.clubId, courtId: court.courtId })
                        }
                        className="text-xs rounded-xl h-9"
                      >
                        <Power
                          className={`h-3.5 w-3.5 mr-1.5 ${court.isActive ? "text-emerald-500" : "text-slate-400"}`}
                        />
                        {court.isActive ? "Disable" : "Enable"}
                      </Button>

                      <div className="flex items-center gap-1">
                        <Button
                          variant="ghost"
                          size="icon"
                          onClick={() => {
                            setEditingCourt(court);
                            setIsCourtModalOpen(true);
                          }}
                          className="h-9 w-9 rounded-xl hover:bg-slate-100 dark:hover:bg-white/10"
                        >
                          <Pencil className="h-4 w-4 text-blue-500" />
                        </Button>
                        <Button
                          variant="ghost"
                          size="icon"
                          onClick={() => setDeletingCourtId(court.courtId)}
                          className="h-9 w-9 rounded-xl hover:bg-red-500/10 text-red-500"
                        >
                          <Trash2 className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          )}
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
              <EmptyState
                icon={Award}
                title="No subscription history"
                description="Your past subscriptions and payments will appear here."
                action={
                  isNoSubscription ? (
                    <Button onClick={() => setIsSubModalOpen(true)} className="min-h-11 gap-2">
                      <Plus className="h-4 w-4" /> Subscribe Now
                    </Button>
                  ) : undefined
                }
              />
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

      {/* Court Form Modal (Create / Edit Court) */}
      <CourtFormModal
        isOpen={isCourtModalOpen}
        onClose={() => {
          setIsCourtModalOpen(false);
          setEditingCourt(null);
        }}
        clubId={club.clubId}
        court={editingCourt}
      />

      {/* Confirm Court Deletion Dialog */}
      <ConfirmDialog
        open={!!deletingCourtId}
        onOpenChange={(open) => !open && setDeletingCourtId(null)}
        title="Delete Court?"
        description="Are you sure you want to delete this court? This action cannot be undone."
        confirmLabel="Delete"
        onConfirm={handleDeleteCourtConfirm}
        isLoading={deleteCourt.isPending}
      />

      <ConfirmDialog
        open={showRenewConfirm}
        onOpenChange={setShowRenewConfirm}
        title="Renew subscription?"
        description="Your active subscription will be renewed for another billing period."
        confirmLabel="Renew"
        onConfirm={handleRenew}
        isLoading={renewSub.isPending}
      />
    </div>
  );
}
