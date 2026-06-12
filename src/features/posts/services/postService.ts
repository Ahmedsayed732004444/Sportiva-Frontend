// src/features/posts/services/postService.ts
import { apiClient } from "@/lib/api/client";
import type {
  Post,
  AddPostRequest,
  UpdatePostRequest,
  PostsQueryParams,
  LikeUser,
  LikeResponse,
} from "../types/post";
import type { PaginatedResponse } from "@/shared/types/api";

/**
 * Posts Service
 * Handles all Posts and Likes endpoints
 */
class PostService {
  /**
   * Add a new post
   * POST /posts
   */
  async addPost(request: AddPostRequest): Promise<Post> {
    const formData = new FormData();
    formData.append("Content", request.content);
    if (request.file) {
      formData.append("File", request.file);
    }

    const response = await apiClient.post<Post>("/posts", formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
    return response;
  }

  /**
   * Update a post's content
   * PUT /posts/{postId}
   */
  async updatePost(postId: string, request: UpdatePostRequest): Promise<void> {
    await apiClient.put(`/posts/${postId}`, request);
  }

  /**
   * Delete a post
   * DELETE /posts/{postId}
   */
  async deletePost(postId: string): Promise<void> {
    await apiClient.delete(`/posts/${postId}`);
  }

  /**
   * Get a single post by ID
   * GET /posts/{postId}
   */
  async getPost(postId: string): Promise<Post> {
    return apiClient.get<Post>(`/posts/${postId}`);
  }

  /**
   * Get all posts (paginated)
   * GET /posts
   */
  async getPosts(params?: PostsQueryParams): Promise<PaginatedResponse<Post>> {
    const queryParams = new URLSearchParams();
    if (params?.pageNumber) queryParams.append("PageNumber", params.pageNumber.toString());
    if (params?.pageSize) queryParams.append("PageSize", params.pageSize.toString());
    if (params?.searchValue) queryParams.append("SearchValue", params.searchValue);
    if (params?.sortColumn) queryParams.append("SortColumn", params.sortColumn);
    if (params?.sortDirection) queryParams.append("SortDirection", params.sortDirection);

    const queryString = queryParams.toString();
    const url = queryString ? `/posts?${queryString}` : "/posts";
    return apiClient.get<PaginatedResponse<Post>>(url);
  }

  /**
   * Get posts by a specific user ID (paginated)
   * GET /posts/user/{userId}
   */
  async getUserPostsById(
    userId: string,
    params?: PostsQueryParams
  ): Promise<PaginatedResponse<Post>> {
    const queryParams = new URLSearchParams();
    if (params?.pageNumber) queryParams.append("PageNumber", params.pageNumber.toString());
    if (params?.pageSize) queryParams.append("PageSize", params.pageSize.toString());
    if (params?.searchValue) queryParams.append("SearchValue", params.searchValue);
    if (params?.sortColumn) queryParams.append("SortColumn", params.sortColumn);
    if (params?.sortDirection) queryParams.append("SortDirection", params.sortDirection);

    const queryString = queryParams.toString();
    const url = queryString ? `/posts/user/${userId}?${queryString}` : `/posts/user/${userId}`;
    return apiClient.get<PaginatedResponse<Post>>(url);
  }

  /**
   * Toggle like on a post
   * POST /posts/{postId}/like
   */
  async addLike(postId: string): Promise<LikeResponse> {
    return apiClient.post<LikeResponse>(`/posts/${postId}/like`);
  }

  /**
   * Toggle like on a post
   * POST /posts/{postId}/like
   */
  async deleteLike(postId: string): Promise<LikeResponse> {
    return apiClient.post<LikeResponse>(`/posts/${postId}/like`);
  }

  /**
   * Get list of users who liked a post
   * GET /posts/{postId}/likers
   */
  async getLikes(postId: string, params?: PostsQueryParams): Promise<PaginatedResponse<LikeUser>> {
    // ✅ Fixed: return type changed from LikeUser[] to PaginatedResponse<LikeUser>
    const queryParams = new URLSearchParams();
    if (params?.pageNumber) queryParams.append("PageNumber", params.pageNumber.toString());
    if (params?.pageSize) queryParams.append("PageSize", params.pageSize.toString());
    if (params?.searchValue) queryParams.append("SearchValue", params.searchValue);
    if (params?.sortColumn) queryParams.append("SortColumn", params.sortColumn);
    if (params?.sortDirection) queryParams.append("SortDirection", params.sortDirection);

    const queryString = queryParams.toString();
    const url = queryString ? `/posts/${postId}/likers?${queryString}` : `/posts/${postId}/likers`;
    return apiClient.get<PaginatedResponse<LikeUser>>(url);
  }
}

export const postService = new PostService();
