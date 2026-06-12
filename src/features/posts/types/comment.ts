// src/features/posts/types/comment.ts
import type { PostsQueryParams } from "./post";

export interface UserSummary {
  userId: string;
  fullName: string;
  profilePictureUrl: string | null;
}

export interface PostCommentResponse {
  commentId: string;
  postId: string;
  content: string;
  author: UserSummary;
  isOwner: boolean;
  iLiked: boolean;
  likesCount: number;
  repliesCount: number;
  createdAt: string;
}

export interface CommentReplyResponse {
  replyId: string;
  commentId: string;
  content: string;
  author: UserSummary;
  isOwner: boolean;
  iLiked: boolean;
  likesCount: number;
  createdAt: string;
}

export interface CreateCommentRequest {
  content: string;
}

export interface UpdateCommentRequest {
  content: string;
}

export interface CreateReplyRequest {
  content: string;
}

export interface UpdateReplyRequest {
  content: string;
}

export interface ToggleCommentLikeResponse {
  commentId: string;
  isLiked: boolean;
  likesCount: number;
}

export interface ToggleReplyLikeResponse {
  replyId: string;
  isLiked: boolean;
  likesCount: number;
}

export type CommentsQueryParams = PostsQueryParams;
