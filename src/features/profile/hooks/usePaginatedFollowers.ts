import { useState, useEffect } from "react";
import { useFollowers } from "./useProfile";
import type { UserCardSummary } from "../types/profile";

export const usePaginatedFollowers = (profileOwnerId: string) => {
  const [page, setPage] = useState(1);
  const [followers, setFollowers] = useState<UserCardSummary[]>([]);

  const { data, isLoading, isFetching, error } = useFollowers(profileOwnerId, {
    pageNumber: page,
    pageSize: 20,
    sortColumn: "FollowedAt",
    sortDirection: "Desc",
  });

  useEffect(() => {
    setPage(1);
    setFollowers([]);
  }, [profileOwnerId]);

  useEffect(() => {
    if (!data?.items) return;
    setFollowers((prev) => (page === 1 ? data.items : [...prev, ...data.items]));
  }, [data, page]);

  const loadMore = () => {
    if (!isFetching && data && page < data.totalPages) {
      setPage((prev) => prev + 1);
    }
  };

  const hasMore = data ? page < data.totalPages : false;
  const totalCount = data?.totalCount ?? followers.length;

  return {
    followers,
    isLoading,
    isFetching,
    hasMore,
    loadMore,
    totalCount,
    error,
    page,
  };
};
