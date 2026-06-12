import { useState, useEffect } from "react";
import { useFollowing } from "./useProfile";
import type { UserCardSummary } from "../types/profile";

export const usePaginatedFollowing = (profileOwnerId: string) => {
  const [page, setPage] = useState(1);
  const [following, setFollowing] = useState<UserCardSummary[]>([]);

  const { data, isLoading, isFetching, error } = useFollowing(profileOwnerId, {
    pageNumber: page,
    pageSize: 20,
    sortColumn: "FollowedAt",
    sortDirection: "Desc",
  });

  useEffect(() => {
    setPage(1);
    setFollowing([]);
  }, [profileOwnerId]);

  useEffect(() => {
    if (!data?.items) return;
    setFollowing((prev) => (page === 1 ? data.items : [...prev, ...data.items]));
  }, [data, page]);

  const loadMore = () => {
    if (!isFetching && data && page < data.totalPages) {
      setPage((prev) => prev + 1);
    }
  };

  const hasMore = data ? page < data.totalPages : false;
  const totalCount = data?.totalCount ?? following.length;

  return {
    following,
    isLoading,
    isFetching,
    hasMore,
    loadMore,
    totalCount,
    error,
    page,
  };
};
