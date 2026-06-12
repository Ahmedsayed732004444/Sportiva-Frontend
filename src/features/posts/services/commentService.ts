// src/features/posts/services/commentService.ts
import { apiClient } from "@/lib/api/client";
import type { PaginatedResponse } from "@/shared/types/api";
import type {
  CommentReplyResponse,
  CommentsQueryParams,
  CreateCommentRequest,
  CreateReplyRequest,
  PostCommentResponse,
  ToggleCommentLikeResponse,
  ToggleReplyLikeResponse,
  UpdateCommentRequest,
  UpdateReplyRequest,
} from "../types/comment";

class CommentService {
  /**
   * Add a comment to a post
   * POST /posts/{postId}/comments
   */
  async createComment(postId: string, request: CreateCommentRequest): Promise<PostCommentResponse> {
    return apiClient.post(`/posts/${postId}/comments`, {
      postId, // ✅ Fixed: backend CreateCommentRequest requires PostId in body
      content: request.content,
    });
  }

  /**
   * Get comments for a post
   * GET /posts/{postId}/comments
   */
  async getComments(
    postId: string,
    params?: CommentsQueryParams
  ): Promise<PaginatedResponse<PostCommentResponse>> {
    const queryParams = new URLSearchParams();
    if (params?.pageNumber) queryParams.append("PageNumber", params.pageNumber.toString());
    if (params?.pageSize) queryParams.append("PageSize", params.pageSize.toString());
    if (params?.searchValue) queryParams.append("SearchValue", params.searchValue);
    if (params?.sortColumn) queryParams.append("SortColumn", params.sortColumn);
    if (params?.sortDirection) queryParams.append("SortDirection", params.sortDirection);

    const queryString = queryParams.toString();
    const url = queryString
      ? `/posts/${postId}/comments?${queryString}`
      : `/posts/${postId}/comments`;
    return apiClient.get<PaginatedResponse<PostCommentResponse>>(url);
  }

  /**
   * Update a comment
   * PUT /posts/{postId}/comments/{commentId}
   */
  async updateComment(
    postId: string,
    commentId: string,
    request: UpdateCommentRequest
  ): Promise<void> {
    await apiClient.put(`/posts/${postId}/comments/${commentId}`, request);
  }

  /**
   * Delete a comment
   * DELETE /posts/{postId}/comments/{commentId}
   */
  async deleteComment(postId: string, commentId: string): Promise<void> {
    await apiClient.delete(`/posts/${postId}/comments/${commentId}`);
  }

  /**
   * Toggle like on a comment
   * POST /posts/{postId}/comments/{commentId}/like
   */
  async toggleCommentLike(postId: string, commentId: string): Promise<ToggleCommentLikeResponse> {
    return apiClient.post(`/posts/${postId}/comments/${commentId}/like`);
  }

  /**
   * Add a reply to a comment
   * POST /posts/{postId}/comments/{commentId}/replies
   */
  async createReply(
    postId: string,
    commentId: string,
    request: CreateReplyRequest
  ): Promise<CommentReplyResponse> {
    return apiClient.post(`/posts/${postId}/comments/${commentId}/replies`, {
      commentId, // ✅ Fixed: backend CreateReplyRequest requires CommentId in body
      content: request.content,
    });
  }

  /**
   * Get replies for a comment
   * GET /posts/{postId}/comments/{commentId}/replies
   */
  async getReplies(
    postId: string,
    commentId: string,
    params?: CommentsQueryParams
  ): Promise<PaginatedResponse<CommentReplyResponse>> {
    const queryParams = new URLSearchParams();
    if (params?.pageNumber) queryParams.append("PageNumber", params.pageNumber.toString());
    if (params?.pageSize) queryParams.append("PageSize", params.pageSize.toString());
    if (params?.searchValue) queryParams.append("SearchValue", params.searchValue);
    if (params?.sortColumn) queryParams.append("SortColumn", params.sortColumn);
    if (params?.sortDirection) queryParams.append("SortDirection", params.sortDirection);

    const queryString = queryParams.toString();
    const url = queryString
      ? `/posts/${postId}/comments/${commentId}/replies?${queryString}`
      : `/posts/${postId}/comments/${commentId}/replies`;
    return apiClient.get<PaginatedResponse<CommentReplyResponse>>(url);
  }

  /**
   * Update a reply
   * PUT /posts/{postId}/comments/{commentId}/replies/{replyId}
   */
  async updateReply(
    postId: string,
    commentId: string,
    replyId: string,
    request: UpdateReplyRequest
  ): Promise<void> {
    await apiClient.put(`/posts/${postId}/comments/${commentId}/replies/${replyId}`, request);
  }

  /**
   * Delete a reply
   * DELETE /posts/{postId}/comments/{commentId}/replies/{replyId}
   */
  async deleteReply(postId: string, commentId: string, replyId: string): Promise<void> {
    await apiClient.delete(`/posts/${postId}/comments/${commentId}/replies/${replyId}`);
  }

  /**
   * Toggle like on a reply
   * POST /posts/{postId}/comments/{commentId}/replies/{replyId}/like
   */
  async toggleReplyLike(
    postId: string,
    commentId: string,
    replyId: string
  ): Promise<ToggleReplyLikeResponse> {
    return apiClient.post(`/posts/${postId}/comments/${commentId}/replies/${replyId}/like`);
  }
}

export const commentService = new CommentService();
