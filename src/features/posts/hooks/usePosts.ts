// src/features/posts/hooks/usePosts.ts
import { useMutation, useQuery, useQueryClient, useInfiniteQuery } from "@tanstack/react-query";
import { toast } from "sonner";
import { useAuth } from "@/features/auth/hooks/useAuth";
import { postService } from "@/features/posts/services/postService";
import { commentService } from "@/features/posts/services/commentService";
import { extractErrorMessage } from "@/lib/api/errors";
import type {
  AddPostRequest,
  UpdatePostRequest,
  PostsQueryParams,
} from "@/features/posts/types/post";
import type {
  CreateCommentRequest,
  CreateReplyRequest,
  UpdateCommentRequest,
  UpdateReplyRequest,
} from "@/features/posts/types/comment";

export const useCreatePost = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (request: AddPostRequest) => postService.addPost(request),
    onSuccess: () => {
      toast.success("Post created successfully!");
      queryClient.invalidateQueries({ queryKey: ["posts"] });
      queryClient.invalidateQueries({ queryKey: ["user-posts"] });
    },
    onError: (error) => {
      toast.error(extractErrorMessage(error));
    },
  });
};

export const useUpdatePost = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ({ postId, request }: { postId: string; request: UpdatePostRequest }) =>
      postService.updatePost(postId, request),
    onSuccess: (_, variables) => {
      toast.success("Post updated successfully!");
      queryClient.invalidateQueries({ queryKey: ["posts"] });
      queryClient.invalidateQueries({ queryKey: ["user-posts"] });
      queryClient.invalidateQueries({ queryKey: ["post", variables.postId] });
    },
    onError: (error) => {
      toast.error(extractErrorMessage(error));
    },
  });
};

export const useDeletePost = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (postId: string) => postService.deletePost(postId),
    onSuccess: () => {
      toast.success("Post deleted successfully!");
      queryClient.invalidateQueries({ queryKey: ["posts"] });
      queryClient.invalidateQueries({ queryKey: ["user-posts"] });
    },
    onError: (error) => {
      toast.error(extractErrorMessage(error));
    },
  });
};

export const useGetPost = (postId: string) => {
  return useQuery({
    queryKey: ["post", postId],
    queryFn: () => postService.getPost(postId),
    enabled: !!postId,
    staleTime: 5 * 60 * 1000,
  });
};

export const usePosts = (params?: PostsQueryParams) => {
  return useQuery({
    queryKey: ["posts", params],
    queryFn: () => postService.getPosts(params),
    staleTime: 2 * 60 * 1000,
  });
};

export const useGetUserPosts = (params?: PostsQueryParams) => {
  const { user } = useAuth();
  return useQuery({
    queryKey: ["user-posts", user?.id, params],
    queryFn: () =>
      user?.id ? postService.getUserPostsById(user.id, params) : Promise.resolve(undefined),
    enabled: !!user?.id,
    staleTime: 2 * 60 * 1000,
  });
};

export const useUserPosts = (userId: string, params?: PostsQueryParams) => {
  return useQuery({
    queryKey: ["user-posts", userId, params],
    queryFn: () => postService.getUserPostsById(userId, params),
    enabled: !!userId,
    staleTime: 2 * 60 * 1000,
  });
};

export const useInfinitePosts = (params?: PostsQueryParams) => {
  return useInfiniteQuery({
    queryKey: ["infinite-posts", params],
    queryFn: ({ pageParam = 1 }) =>
      postService.getPosts({ ...params, pageNumber: pageParam, pageSize: 6 }),
    initialPageParam: 1,
    getNextPageParam: (lastPage) =>
      lastPage.pageNumber < lastPage.totalPages ? lastPage.pageNumber + 1 : undefined,
    staleTime: 2 * 60 * 1000,
  });
};

export const useInfiniteUserPosts = (userId: string, params?: PostsQueryParams) => {
  return useInfiniteQuery({
    queryKey: ["infinite-user-posts", userId, params],
    queryFn: ({ pageParam = 1 }) =>
      postService.getUserPostsById(userId, { ...params, pageNumber: pageParam, pageSize: 6 }),
    initialPageParam: 1,
    getNextPageParam: (lastPage) =>
      lastPage.pageNumber < lastPage.totalPages ? lastPage.pageNumber + 1 : undefined,
    enabled: !!userId,
    staleTime: 2 * 60 * 1000,
  });
};

export const useToggleLike = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ({ postId, isLiked }: { postId: string; isLiked: boolean }) =>
      isLiked ? postService.deleteLike(postId) : postService.addLike(postId),
    onSuccess: (data) => {
      queryClient.invalidateQueries({ queryKey: ["posts"] });
      queryClient.invalidateQueries({ queryKey: ["user-posts"] });
      queryClient.invalidateQueries({ queryKey: ["post", data.postId] });
    },
    onError: (error) => {
      const message = extractErrorMessage(error);
      if (!message.includes("AlreadyLiked") && !message.includes("already liked")) {
        toast.error(message);
      }
    },
  });
};

export const useAddLike = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (postId: string) => postService.addLike(postId),
    onSuccess: (data) => {
      queryClient.invalidateQueries({ queryKey: ["posts"] });
      queryClient.invalidateQueries({ queryKey: ["user-posts"] });
      queryClient.invalidateQueries({ queryKey: ["post", data.postId] });
    },
    onError: (error) => {
      const message = extractErrorMessage(error);
      if (!message.includes("AlreadyLiked") && !message.includes("already liked")) {
        toast.error(message);
      }
    },
  });
};

export const useDeleteLike = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (postId: string) => postService.deleteLike(postId),
    onSuccess: (data) => {
      queryClient.invalidateQueries({ queryKey: ["post", data.postId] });
      queryClient.invalidateQueries({ queryKey: ["posts"] });
      queryClient.invalidateQueries({ queryKey: ["user-posts"] });
    },
    onError: (error) => {
      toast.error(extractErrorMessage(error));
    },
  });
};

export const usePostLikers = (postId: string, enabled = true) => {
  return useQuery({
    queryKey: ["likes", postId],
    queryFn: () => postService.getLikes(postId),
    enabled: !!postId && enabled,
    staleTime: 1 * 60 * 1000,
  });
};

// Comment hooks
export const useComments = (postId: string, enabled = true) => {
  return useQuery({
    queryKey: ["comments", postId],
    queryFn: () => commentService.getComments(postId),
    enabled: !!postId && enabled,
    staleTime: 2 * 60 * 1000,
  });
};

export const useCreateComment = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ({ postId, request }: { postId: string; request: CreateCommentRequest }) =>
      commentService.createComment(postId, request),
    onSuccess: (_, variables) => {
      toast.success("Comment added successfully!");
      queryClient.invalidateQueries({ queryKey: ["comments", variables.postId] });
    },
    onError: (error) => {
      toast.error(extractErrorMessage(error));
    },
  });
};

export const useUpdateComment = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ({
      postId,
      commentId,
      request,
    }: {
      postId: string;
      commentId: string;
      request: UpdateCommentRequest;
    }) => commentService.updateComment(postId, commentId, request),
    onSuccess: (_, variables) => {
      toast.success("Comment updated successfully!");
      queryClient.invalidateQueries({ queryKey: ["comments", variables.postId] });
    },
    onError: (error) => {
      toast.error(extractErrorMessage(error));
    },
  });
};

export const useDeleteComment = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ({ postId, commentId }: { postId: string; commentId: string }) =>
      commentService.deleteComment(postId, commentId),
    onSuccess: (_, variables) => {
      toast.success("Comment deleted successfully!");
      queryClient.invalidateQueries({ queryKey: ["comments", variables.postId] });
      queryClient.invalidateQueries({ queryKey: ["posts"] });
    },
    onError: (error) => {
      toast.error(extractErrorMessage(error));
    },
  });
};

export const useToggleCommentLike = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ({ postId, commentId }: { postId: string; commentId: string }) =>
      commentService.toggleCommentLike(postId, commentId),
    onSuccess: (_, variables) => {
      queryClient.invalidateQueries({ queryKey: ["comments", variables.postId] });
    },
    onError: (error) => {
      toast.error(extractErrorMessage(error));
    },
  });
};

export const useReplies = (postId: string, commentId: string, enabled = true) => {
  return useQuery({
    queryKey: ["replies", commentId],
    queryFn: () => commentService.getReplies(postId, commentId),
    enabled: !!postId && !!commentId && enabled,
    staleTime: 2 * 60 * 1000,
  });
};

export const useCreateReply = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ({
      postId,
      commentId,
      request,
    }: {
      postId: string;
      commentId: string;
      request: CreateReplyRequest;
    }) => commentService.createReply(postId, commentId, request),
    onSuccess: (_, variables) => {
      toast.success("Reply added successfully!");
      queryClient.invalidateQueries({ queryKey: ["replies", variables.commentId] });
    },
    onError: (error) => {
      toast.error(extractErrorMessage(error));
    },
  });
};

export const useUpdateReply = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ({
      postId,
      commentId,
      replyId,
      request,
    }: {
      postId: string;
      commentId: string;
      replyId: string;
      request: UpdateReplyRequest;
    }) => commentService.updateReply(postId, commentId, replyId, request),
    onSuccess: (_, variables) => {
      toast.success("Reply updated successfully!");
      queryClient.invalidateQueries({ queryKey: ["replies", variables.commentId] });
    },
    onError: (error) => {
      toast.error(extractErrorMessage(error));
    },
  });
};

export const useDeleteReply = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ({
      postId,
      commentId,
      replyId,
    }: {
      postId: string;
      commentId: string;
      replyId: string;
    }) => commentService.deleteReply(postId, commentId, replyId),
    onSuccess: (_, variables) => {
      toast.success("Reply deleted successfully!");
      queryClient.invalidateQueries({ queryKey: ["replies", variables.commentId] });
      queryClient.invalidateQueries({ queryKey: ["comments", variables.postId] });
    },
    onError: (error) => {
      toast.error(extractErrorMessage(error));
    },
  });
};

export const useToggleReplyLike = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ({
      postId,
      commentId,
      replyId,
    }: {
      postId: string;
      commentId: string;
      replyId: string;
    }) => commentService.toggleReplyLike(postId, commentId, replyId),
    onSuccess: (_, variables) => {
      queryClient.invalidateQueries({ queryKey: ["replies", variables.commentId] });
    },
    onError: (error) => {
      toast.error(extractErrorMessage(error));
    },
  });
};
