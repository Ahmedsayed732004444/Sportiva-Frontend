import { useState, useEffect } from "react";
import { useQueryClient } from "@tanstack/react-query";
import { usePosts } from "./usePosts";
import type { Post } from "../types/post";

export const usePaginatedPosts = () => {
  const queryClient = useQueryClient();
  const [page, setPage] = useState(1);
  const [posts, setPosts] = useState<Post[]>([]);

  const { data, isLoading, isFetching, error } = usePosts({
    pageNumber: page,
    pageSize: 10,
    sortColumn: "CreatedAt",
    sortDirection: "Desc",
  });

  useEffect(() => {
    if (!data?.items) return;
    setPosts((prev) => (page === 1 ? data.items : [...prev, ...data.items]));
  }, [data, page]);

  const loadMore = () => {
    if (!isFetching && data && page < data.totalPages) {
      setPage((prev) => prev + 1);
    }
  };

  const reset = () => {
    setPage(1);
    setPosts([]);
    queryClient.invalidateQueries({ queryKey: ["posts"] });
  };

  const hasMore = data ? page < data.totalPages : false;

  return {
    posts,
    isLoading,
    isFetching,
    hasMore,
    loadMore,
    reset,
    error,
    page,
  };
};
