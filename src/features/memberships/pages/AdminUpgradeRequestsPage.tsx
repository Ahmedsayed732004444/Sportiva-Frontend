import { useState, useMemo } from "react";
import { Link } from "react-router-dom";
import {
  useGetUpgradeRequests,
  useApproveUpgradeRequest,
  useRejectUpgradeRequest,
} from "../hooks/useMemberships";
import { Card, CardContent } from "@/shared/components/ui/card";
import { Button } from "@/shared/components/ui/button";
import { Skeleton } from "@/shared/components/ui/skeleton";
import { Input } from "@/shared/components/ui/input";
import {
  Phone,
  Building,
  MapPin,
  Link2,
  FileText,
  CheckCircle,
  XCircle,
  Clock,
  AlertCircle,
  ShieldCheck,
  Search,
  ExternalLink,
  Mail,
  User,
  Calendar,
  Crown,
} from "lucide-react";
import { RequestStatusDto } from "../types/memberships";
import { cn } from "@/lib/utils";

/* ─────────────── helpers ─────────────── */
const getStatusMeta = (status: RequestStatusDto) => {
  if (status === RequestStatusDto.Pending)
    return {
      label: "Pending Review",
      cls: "bg-amber-500/10 text-amber-600 border-amber-400/30",
      dot: "bg-amber-500",
      border: "border-l-amber-400",
    };
  if (status === RequestStatusDto.Approved)
    return {
      label: "Approved",
      cls: "bg-emerald-500/10 text-emerald-600 border-emerald-400/30",
      dot: "bg-emerald-500",
      border: "border-l-[#20A854]",
    };
  return {
    label: "Rejected",
    cls: "bg-red-500/10 text-red-600 border-red-400/30",
    dot: "bg-red-500",
    border: "border-l-red-500",
  };
};

const TABS = [
  { value: "all", label: "All" },
  { value: "pending", label: "Pending" },
  { value: "approved", label: "Approved" },
  { value: "rejected", label: "Rejected" },
] as const;

/* ─────────────── skeleton ─────────────── */
function PageSkeleton() {
  return (
    <div className="container mx-auto py-6 px-4 max-w-5xl space-y-6">
      <Skeleton className="h-44 w-full rounded-3xl" />
      <div className="grid grid-cols-3 gap-4">
        {[1, 2, 3].map((i) => <Skeleton key={i} className="h-24 rounded-3xl" />)}
      </div>
      <Skeleton className="h-14 w-full rounded-2xl" />
      {[1, 2, 3].map((i) => <Skeleton key={i} className="h-44 w-full rounded-3xl" />)}
    </div>
  );
}

/* ─────────────── main page ─────────────── */
export default function AdminUpgradeRequestsPage() {
  const [activeTab, setActiveTab] = useState<string>("all");
  const [searchQuery, setSearchQuery] = useState("");

  const parsedStatus =
    activeTab === "pending" ? RequestStatusDto.Pending
    : activeTab === "approved" ? RequestStatusDto.Approved
    : activeTab === "rejected" ? RequestStatusDto.Rejected
    : undefined;

  const { data: requestsData, isLoading, isError } = useGetUpgradeRequests(
    { pageNumber: 1, pageSize: 100 },
    parsedStatus
  );
  const requests = requestsData?.items || [];

  const approveMutation = useApproveUpgradeRequest();
  const rejectMutation  = useRejectUpgradeRequest();



  /* client-side search */
  const filtered = useMemo(() => {
    if (!searchQuery.trim()) return requests;
    const q = searchQuery.toLowerCase();
    return requests.filter(
      (r) =>
        r.requestedBy.fullName.toLowerCase().includes(q) ||
        r.requestedBy.email.toLowerCase().includes(q) ||
        r.fullName?.toLowerCase().includes(q)
    );
  }, [requests, searchQuery]);

  const handleApprove = async (requestId: string) => {
    if (confirm("Approve this upgrade request?")) {
      try { await approveMutation.mutateAsync(requestId); }
      catch (e) { console.error(e); }
    }
  };

  const handleReject = async (requestId: string) => {
    if (confirm("Reject this upgrade request?")) {
      try { await rejectMutation.mutateAsync(requestId); }
      catch (e) { console.error(e); }
    }
  };

  if (isLoading) return <PageSkeleton />;

  return (
    <div className="container mx-auto py-6 px-4 sm:px-6 max-w-5xl space-y-6">

      {/* ── Hero Banner ── */}
      <div className="relative w-full h-44 sm:h-52 rounded-3xl overflow-hidden border border-gray-100 dark:border-muted/30 shadow-sm flex items-end p-6 bg-gradient-to-br from-gray-900 via-gray-800 to-[#20A854]/30">
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
        {/* admin panel badge */}
        <div className="absolute top-4 right-4 z-10">
          <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-bold bg-[#20A854]/20 text-[#20A854] border border-[#20A854]/30 backdrop-blur-sm">
            <ShieldCheck className="h-3.5 w-3.5" /> Admin Panel
          </span>
        </div>
        {/* content */}
        <div className="relative z-10 flex items-center gap-4">
          <div className="h-12 w-12 rounded-2xl bg-[#20A854] text-white flex items-center justify-center shrink-0 shadow-lg">
            <ShieldCheck className="h-6 w-6" />
          </div>
          <div>
            <h1 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight leading-tight">
              Membership Upgrade Requests
            </h1>
            <p className="text-white/70 mt-1.5 text-xs font-semibold">
              Review and process player upgrade requests to Member or Club Owner status
            </p>
          </div>
        </div>
      </div>



      {/* ── Filter Bar ── */}
      <Card className="rounded-3xl border border-gray-100 dark:border-muted/30 bg-white dark:bg-card shadow-sm">
        <CardContent className="p-4 flex flex-col sm:flex-row gap-4 items-stretch sm:items-center">
          {/* search */}
          <div className="relative flex-1">
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
            <Input
              className="pl-10 h-11 rounded-2xl bg-gray-50 dark:bg-muted/30 border border-gray-200 dark:border-muted/40 text-xs font-semibold"
              placeholder="Search by player name or email..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
          {/* tab pills */}
          <div className="flex gap-1.5 bg-gray-50 dark:bg-muted/30 p-1 rounded-2xl border border-gray-100 dark:border-muted/30 shrink-0">
            {TABS.map((tab) => (
              <button
                key={tab.value}
                onClick={() => setActiveTab(tab.value)}
                className={cn(
                  "px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all",
                  activeTab === tab.value
                    ? "bg-white dark:bg-card shadow-sm text-[#20A854]"
                    : "text-gray-500 dark:text-muted-foreground hover:text-gray-800 dark:hover:text-white"
                )}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* ── Requests List ── */}
      {isError ? (
        <div className="py-12 text-center text-red-500 bg-red-500/5 rounded-3xl border border-red-500/20 flex flex-col items-center gap-2">
          <AlertCircle className="h-8 w-8" />
          <span className="text-sm font-semibold">Failed to load requests. Please try again later.</span>
        </div>
      ) : filtered.length === 0 ? (
        <div className="py-16 text-center bg-white dark:bg-card border border-gray-100 dark:border-muted/30 rounded-3xl space-y-2">
          <FileText className="h-10 w-10 mx-auto text-gray-300 dark:text-muted-foreground/40" />
          <h3 className="text-base font-bold text-gray-800 dark:text-white">No Requests Found</h3>
          <p className="text-sm text-gray-400 dark:text-muted-foreground">
            {searchQuery ? "No results match your search." : "No membership upgrade requests matching this filter."}
          </p>
        </div>
      ) : (
        <div className="space-y-4">
          {filtered.map((req) => {
            const sm = getStatusMeta(req.status);
            const isPending = req.status === RequestStatusDto.Pending;
            const isApproved = req.status === RequestStatusDto.Approved;
            const isRejected = req.status === RequestStatusDto.Rejected;

            return (
              <Card
                key={req.requestId}
                className={cn(
                  "rounded-3xl border border-gray-100 dark:border-muted/30 bg-white dark:bg-card shadow-sm overflow-hidden border-l-[5px] transition-shadow hover:shadow-md",
                  sm.border
                )}
              >
                <CardContent className="p-5 flex flex-col gap-4">

                  {/* ── Top Row: ID + User Email + Status + Date ── */}
                  <div className="flex flex-wrap items-center gap-3 justify-between">
                    <div className="flex items-center gap-2.5 flex-wrap">
                      <span className="font-mono text-[10px] font-black text-gray-700 dark:text-gray-300 bg-gray-50 dark:bg-muted/20 border border-gray-100 dark:border-muted/30 px-2.5 py-1 rounded-xl">
                        Req #{req.requestId.substring(0, 8).toUpperCase()}
                      </span>
                      {(req.email || req.requestedBy?.email) && (
                        <span
                          className="text-[10px] font-bold text-gray-700 dark:text-gray-300 bg-emerald-500/10 border border-emerald-500/20 px-2.5 py-1 rounded-xl flex items-center gap-1.5"
                          title={`Requester Email: ${req.email || req.requestedBy?.email}`}
                        >
                          <Mail className="h-3 w-3 text-[#20A854]" />
                          <span className="font-semibold text-gray-900 dark:text-white">{req.email || req.requestedBy?.email}</span>
                        </span>
                      )}
                      <span className={cn(
                        "inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-bold border",
                        sm.cls
                      )}>
                        <span className={cn("w-1.5 h-1.5 rounded-full", sm.dot)} />
                        {sm.label}
                      </span>
                      {req.isClubOwner && (
                        <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-[10px] font-bold bg-purple-500/10 text-purple-600 border border-purple-400/20">
                          <Crown className="h-3 w-3" /> Club Owner Request
                        </span>
                      )}
                    </div>
                    <span className="text-[10px] text-gray-400 dark:text-muted-foreground flex items-center gap-1.5 font-semibold">
                      <Calendar className="h-3.5 w-3.5" />
                      Submitted {new Date(req.createdAt).toLocaleDateString("en-US", { day: "numeric", month: "long", year: "numeric" })}
                    </span>
                  </div>

                  {/* ── Player Row ── */}
                  <div className="flex items-center gap-3 p-3 rounded-2xl bg-gray-50/60 dark:bg-muted/10 border border-gray-100 dark:border-muted/20">
                    <Link
                      to={`/profile/${req.requestedBy.userId}`}
                      className="shrink-0 group"
                      title={`View ${req.requestedBy.fullName}'s profile`}
                    >
                      {req.requestedBy.profilePhotoUrl ? (
                        <img
                          src={req.requestedBy.profilePhotoUrl}
                          alt={req.requestedBy.fullName}
                          className="h-12 w-12 rounded-full object-cover border-2 border-white dark:border-card shadow-sm group-hover:ring-2 group-hover:ring-[#20A854]/40 transition-all"
                        />
                      ) : (
                        <div className="h-12 w-12 rounded-full bg-[#20A854]/10 text-[#20A854] font-extrabold text-base flex items-center justify-center border-2 border-white dark:border-card shadow-sm group-hover:ring-2 group-hover:ring-[#20A854]/40 transition-all">
                          {req.requestedBy.fullName?.charAt(0)?.toUpperCase()}
                        </div>
                      )}
                    </Link>
                    <div className="min-w-0 flex-1">
                      <Link
                        to={`/profile/${req.requestedBy.userId}`}
                        className="inline-flex items-center gap-1.5 text-sm font-extrabold text-[#20A854] hover:underline"
                      >
                        {req.requestedBy.fullName}
                        <ExternalLink className="h-3 w-3 opacity-60 shrink-0" />
                      </Link>
                      <p className="text-[11px] font-semibold text-gray-600 dark:text-gray-300 flex items-center gap-1 mt-0.5">
                        <Mail className="h-3 w-3 shrink-0 text-[#20A854]" />
                        {req.email || req.requestedBy?.email || "No email available"}
                      </p>
                      {req.fullName && req.fullName !== req.requestedBy.fullName && (
                        <p className="text-[11px] text-gray-400 dark:text-muted-foreground flex items-center gap-1 mt-0.5">
                          <User className="h-3 w-3 shrink-0" />
                          Submitted as: <span className="font-semibold text-gray-600 dark:text-gray-300 ml-1">{req.fullName}</span>
                        </p>
                      )}
                    </div>
                  </div>

                  {/* ── Details Grid ── */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 text-xs">
                    {/* Phone */}
                    <div className="flex items-start gap-2.5">
                      <div className="p-2 rounded-xl bg-[#20A854]/8 dark:bg-[#20A854]/10 shrink-0">
                        <Phone className="h-3.5 w-3.5 text-[#20A854]" />
                      </div>
                      <div>
                        <p className="text-[10px] font-bold text-gray-400 uppercase tracking-wider">Phone</p>
                        <p className="font-bold text-gray-900 dark:text-white mt-0.5">{req.phone}</p>
                      </div>
                    </div>

                    {/* Club Name */}
                    {req.isClubOwner && req.clubName && (
                      <div className="flex items-start gap-2.5">
                        <div className="p-2 rounded-xl bg-[#20A854]/8 dark:bg-[#20A854]/10 shrink-0">
                          <Building className="h-3.5 w-3.5 text-[#20A854]" />
                        </div>
                        <div>
                          <p className="text-[10px] font-bold text-gray-400 uppercase tracking-wider">Club Name</p>
                          <p className="font-bold text-gray-900 dark:text-white mt-0.5">{req.clubName}</p>
                          {req.address && (
                            <p className="text-[10px] text-gray-400 flex items-center gap-1 mt-0.5">
                              <MapPin className="h-3 w-3 shrink-0" /> {req.address}
                            </p>
                          )}
                          {req.locationUrl && (
                            <a
                              href={req.locationUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-[10px] text-[#20A854] hover:underline flex items-center gap-1 mt-0.5 font-semibold"
                            >
                              <Link2 className="h-3 w-3 shrink-0" /> Maps Link
                            </a>
                          )}
                        </div>
                      </div>
                    )}

                    {/* Reviewed At */}
                    {req.reviewedAt && (
                      <div className="flex items-start gap-2.5">
                        <div className="p-2 rounded-xl bg-gray-100 dark:bg-muted/20 shrink-0">
                          <Calendar className="h-3.5 w-3.5 text-gray-400" />
                        </div>
                        <div>
                          <p className="text-[10px] font-bold text-gray-400 uppercase tracking-wider">Reviewed On</p>
                          <p className="font-bold text-gray-900 dark:text-white mt-0.5">
                            {new Date(req.reviewedAt).toLocaleDateString("en-US", { day: "numeric", month: "short", year: "numeric" })}
                          </p>
                        </div>
                      </div>
                    )}
                  </div>

                  {/* ── Note ── */}
                  {req.note && (
                    <div className="flex items-start gap-2.5 p-3.5 rounded-2xl bg-gray-50 dark:bg-muted/10 border border-gray-100 dark:border-muted/20">
                      <FileText className="h-4 w-4 text-[#20A854] shrink-0 mt-0.5" />
                      <div>
                        <p className="text-[10px] font-bold text-gray-400 uppercase tracking-wider mb-1">Cover Note</p>
                        <p className="text-xs text-gray-600 dark:text-gray-300 leading-relaxed font-medium">
                          "{req.note}"
                        </p>
                      </div>
                    </div>
                  )}

                  {/* ── Rejected reason placeholder ── */}
                  {isRejected && (
                    <div className="flex items-start gap-2.5 p-3.5 rounded-2xl bg-red-500/5 border border-red-500/15">
                      <XCircle className="h-4 w-4 text-red-500 shrink-0 mt-0.5" />
                      <p className="text-xs text-red-600 dark:text-red-400 font-semibold leading-relaxed">
                        This request was reviewed and rejected.
                        {req.reviewedAt && ` (${new Date(req.reviewedAt).toLocaleDateString("en-US", { day: "numeric", month: "short", year: "numeric" })})`}
                      </p>
                    </div>
                  )}

                  {/* ── Approved note ── */}
                  {isApproved && (
                    <div className="flex items-start gap-2.5 p-3.5 rounded-2xl bg-[#20A854]/5 border border-[#20A854]/15">
                      <CheckCircle className="h-4 w-4 text-[#20A854] shrink-0 mt-0.5" />
                      <p className="text-xs text-[#20A854] font-semibold leading-relaxed">
                        This request was approved and the user's role has been upgraded.
                        {req.reviewedAt && ` (${new Date(req.reviewedAt).toLocaleDateString("en-US", { day: "numeric", month: "short", year: "numeric" })})`}
                      </p>
                    </div>
                  )}

                  {/* ── Actions (Pending only) ── */}
                  {isPending && (
                    <div className="flex gap-3 pt-2 border-t border-gray-100 dark:border-muted/20">
                      <Button
                        className="flex-1 rounded-2xl h-10 bg-[#20A854] hover:bg-[#20A854]/90 text-white font-bold gap-2 text-sm shadow-sm shadow-[#20A854]/20"
                        onClick={() => handleApprove(req.requestId)}
                        disabled={approveMutation.isPending || rejectMutation.isPending}
                      >
                        <CheckCircle className="h-4 w-4" />
                        {approveMutation.isPending ? "Approving..." : "Approve"}
                      </Button>
                      <Button
                        className="flex-1 rounded-2xl h-10 bg-red-500/10 hover:bg-red-500/20 text-red-600 border border-red-500/20 font-bold gap-2 text-sm shadow-none"
                        onClick={() => handleReject(req.requestId)}
                        disabled={approveMutation.isPending || rejectMutation.isPending}
                      >
                        <XCircle className="h-4 w-4" />
                        {rejectMutation.isPending ? "Rejecting..." : "Reject"}
                      </Button>
                    </div>
                  )}

                </CardContent>
              </Card>
            );
          })}
        </div>
      )}
    </div>
  );
}
