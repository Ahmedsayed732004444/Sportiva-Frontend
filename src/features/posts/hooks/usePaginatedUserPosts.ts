import { useState, useEffect } from "react";
import { useUserPosts } from "./usePosts";
import type { Post } from "../types/post";

export const usePaginatedUserPosts = (userId: string) => {
  const [page, setPage] = useState(1);
  const [posts, setPosts] = useState<Post[]>([]);

  const { data, isLoading, isFetching, error, isError, refetch } = useUserPosts(userId, {
    pageNumber: page,
    pageSize: 10,
    sortColumn: "CreatedAt",
    sortDirection: "Desc",
  });

  useEffect(() => {
    setPage(1);
    setPosts([]);
  }, [userId]);

  useEffect(() => {
    if (!data?.items) return;
    setPosts((prev) => (page === 1 ? data.items : [...prev, ...data.items]));
  }, [data, page]);

  const loadMore = () => {
    if (!isFetching && data && page < data.totalPages) {
      setPage((prev) => prev + 1);
    }
  };

  const hasMore = data ? page < data.totalPages : false;

  return {
    posts,
    isLoading,
    isFetching,
    hasMore,
    loadMore,
    error,
    isError,
    refetch,
    page,
  };
};
