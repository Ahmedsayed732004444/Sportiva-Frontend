export interface SubscriptionPlanResponse {
  planId: string;
  name: string;
  description?: string;
  price: number;
  maxCourts: number;
  durationInDays: number;
  isActive: boolean;
  expiresAt?: string;
  createdAt: string;
}

export interface CreateSubscriptionPlanRequest {
  name: string;
  description?: string;
  price: number;
  maxCourts: number;
  durationInDays: number;
}

export interface UpdateSubscriptionPlanRequest {
  name: string;
  description?: string;
  price: number;
  maxCourts: number;
  durationInDays: number;
  isActive: boolean;
}
