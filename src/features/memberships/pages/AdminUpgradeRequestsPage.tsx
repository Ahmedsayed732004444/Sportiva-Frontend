import { useState } from "react";
import {
  useGetUpgradeRequests,
  useApproveUpgradeRequest,
  useRejectUpgradeRequest,
} from "../hooks/useMemberships";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/shared/components/ui/card";
import { Button } from "@/shared/components/ui/button";
import { Skeleton } from "@/shared/components/ui/skeleton";
import { Badge } from "@/shared/components/ui/badge";
import { Tabs, TabsList, TabsTrigger } from "@/shared/components/ui/tabs";
import {
  User,
  Phone,
  Building,
  MapPin,
  Link2,
  FileText,
  CheckCircle,
  XCircle,
  Clock,
  AlertCircle,
  ShieldAlert,
} from "lucide-react";
import { RequestStatusDto } from "../types/memberships";

export default function AdminUpgradeRequestsPage() {
  const [activeTab, setActiveTab] = useState<string>("all");

  const parsedStatus =
    activeTab === "all"
      ? undefined
      : activeTab === "pending"
      ? RequestStatusDto.Pending
      : activeTab === "approved"
      ? RequestStatusDto.Approved
      : RequestStatusDto.Rejected;

  // Query
  const { data: requestsData, isLoading, isError } = useGetUpgradeRequests(
    { pageNumber: 1, pageSize: 50 },
    parsedStatus
  );
  const requests = requestsData?.items || [];

  // Mutations
  const approveMutation = useApproveUpgradeRequest();
  const rejectMutation = useRejectUpgradeRequest();

  const handleApprove = async (requestId: string) => {
    if (confirm("Are you sure you want to approve this upgrade request?")) {
      try {
        await approveMutation.mutateAsync(requestId);
      } catch (err) {
        console.error(err);
      }
    }
  };

  const handleReject = async (requestId: string) => {
    if (confirm("Are you sure you want to reject this upgrade request?")) {
      try {
        await rejectMutation.mutateAsync(requestId);
      } catch (err) {
        console.error(err);
      }
    }
  };

  const getStatusBadge = (status: RequestStatusDto) => {
    switch (status) {
      case RequestStatusDto.Pending:
        return (
          <Badge variant="secondary" className="gap-1">
            <Clock className="h-3 w-3" /> Pending
          </Badge>
        );
      case RequestStatusDto.Approved:
        return (
          <Badge variant="default" className="bg-green-600 hover:bg-green-700 gap-1">
            <CheckCircle className="h-3 w-3" /> Approved
          </Badge>
        );
      case RequestStatusDto.Rejected:
        return (
          <Badge variant="destructive" className="gap-1">
            <XCircle className="h-3 w-3" /> Rejected
          </Badge>
        );
      default:
        return <Badge variant="outline">Unknown</Badge>;
    }
  };

  return (
    <div className="container mx-auto py-8 px-4 max-w-5xl space-y-8">
      {/* Header */}
      <div className="border-b pb-6">
        <h1 className="text-3xl font-bold tracking-tight text-foreground flex items-center gap-2">
          <ShieldAlert className="h-8 w-8 text-primary" />
          Account Upgrade Requests
        </h1>
        <p className="text-muted-foreground mt-1 text-sm">
          Review and manage user upgrade requests to Club Owner roles.
        </p>
      </div>

      {/* Tabs Filter */}
      <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
        <TabsList className="grid w-full sm:w-[400px] grid-cols-4">
          <TabsTrigger value="all">All</TabsTrigger>
          <TabsTrigger value="pending">Pending</TabsTrigger>
          <TabsTrigger value="approved">Approved</TabsTrigger>
          <TabsTrigger value="rejected">Rejected</TabsTrigger>
        </TabsList>
      </Tabs>

      {/* Requests List */}
      {isLoading ? (
        <div className="space-y-4">
          {[...Array(3)].map((_, i) => (
            <Skeleton key={i} className="h-32 w-full rounded-xl" />
          ))}
        </div>
      ) : isError ? (
        <div className="py-12 text-center text-destructive bg-destructive/10 rounded-xl border border-destructive/20 flex flex-col items-center justify-center gap-2">
          <AlertCircle className="h-8 w-8" />
          <span>Failed to load upgrade requests. Please try again later.</span>
        </div>
      ) : requests.length === 0 ? (
        <div className="py-16 text-center text-muted-foreground bg-card border rounded-xl space-y-2">
          <FileText className="h-10 w-10 mx-auto text-muted-foreground/40" />
          <h3 className="text-base font-semibold">No Requests Found</h3>
          <p className="text-sm">There are no membership upgrade requests matching this filter.</p>
        </div>
      ) : (
        <div className="space-y-4">
          {requests.map((req) => (
            <Card key={req.requestId} className="bg-card hover:border-muted-foreground/20 transition-all border-muted/50 overflow-hidden shadow-sm">
              <CardContent className="p-6 flex flex-col md:flex-row md:items-start justify-between gap-6">
                <div className="space-y-4 flex-1">
                  {/* Header Row */}
                  <div className="flex flex-wrap items-center gap-3">
                    <span className="text-xs font-bold text-primary bg-primary/10 px-2 py-0.5 rounded">
                      {req.isClubOwner ? "Club Owner Role" : "General Role"}
                    </span>
                    {getStatusBadge(req.status)}
                    <span className="text-xs text-muted-foreground">
                      Submitted on {new Date(req.createdAt).toLocaleDateString()}
                    </span>
                  </div>

                  {/* Profile & Form Fields */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 text-sm">
                    {/* Requested By */}
                    <div className="flex items-start gap-2">
                      <User className="h-4 w-4 text-primary shrink-0 mt-0.5" />
                      <div>
                        <p className="font-semibold text-foreground">{req.fullName}</p>
                        <p className="text-xs text-muted-foreground">User: {req.requestedBy.fullName}</p>
                        <p className="text-xs text-muted-foreground">{req.requestedBy.email}</p>
                      </div>
                    </div>

                    {/* Phone */}
                    <div className="flex items-center gap-2">
                      <Phone className="h-4 w-4 text-primary shrink-0" />
                      <div>
                        <p className="font-semibold text-foreground">{req.phone}</p>
                        <p className="text-xs text-muted-foreground">Contact Phone</p>
                      </div>
                    </div>

                    {/* Club Details */}
                    {req.isClubOwner && req.clubName && (
                      <div className="flex items-start gap-2">
                        <Building className="h-4 w-4 text-primary shrink-0 mt-0.5" />
                        <div>
                          <p className="font-semibold text-foreground">{req.clubName}</p>
                          {req.address && (
                            <p className="text-xs text-muted-foreground flex items-center gap-1 mt-0.5">
                              <MapPin className="h-3.5 w-3.5 shrink-0" /> {req.address}
                            </p>
                          )}
                          {req.locationUrl && (
                            <a
                              href={req.locationUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-xs text-primary hover:underline flex items-center gap-1 mt-0.5"
                            >
                              <Link2 className="h-3.5 w-3.5 shrink-0" /> Maps Link
                            </a>
                          )}
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Note */}
                  {req.note && (
                    <div className="bg-muted/40 p-3 rounded-lg border text-xs text-muted-foreground flex items-start gap-2 max-w-3xl">
                      <FileText className="h-3.5 w-3.5 text-primary shrink-0 mt-0.5" />
                      <div>
                        <span className="font-bold text-foreground mr-1">Cover Note:</span>
                        "{req.note}"
                      </div>
                    </div>
                  )}
                </div>

                {/* Actions Panel */}
                {req.status === RequestStatusDto.Pending && (
                  <div className="flex flex-row md:flex-col gap-2 shrink-0 self-end md:self-start pt-4 md:pt-0 border-t md:border-t-0 border-muted w-full md:w-auto md:justify-end">
                    <Button
                      size="sm"
                      className="bg-green-600 hover:bg-green-700 text-white flex-1 md:flex-initial"
                      onClick={() => handleApprove(req.requestId)}
                      disabled={approveMutation.isPending || rejectMutation.isPending}
                    >
                      <CheckCircle className="mr-1.5 h-4 w-4" /> Approve
                    </Button>
                    <Button
                      size="sm"
                      variant="destructive"
                      className="flex-1 md:flex-initial"
                      onClick={() => handleReject(req.requestId)}
                      disabled={approveMutation.isPending || rejectMutation.isPending}
                    >
                      <XCircle className="mr-1.5 h-4 w-4" /> Reject
                    </Button>
                  </div>
                )}
              </CardContent>
            </Card>
          ))}
        </div>
      )}
    </div>
  );
}
