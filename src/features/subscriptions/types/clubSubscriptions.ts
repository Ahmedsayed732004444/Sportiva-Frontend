export interface SubscriptionPlanSummary {
  planId: string;
  name: string;
  price: number;
  maxCourts: number;
}

export interface ClubSummary {
  clubId: string;
  name: string;
  logoUrl?: string;
}

export interface SubscriptionPaymentSummary {
  paymentId: string;
  amount: number;
  status: number; // 1 = Pending, 2 = Paid, 3 = Failed, etc.
  transactionId?: string;
  paidAt?: string;
}

export interface ClubSubscriptionResponse {
  subscriptionId: string;
  club: ClubSummary;
  plan: SubscriptionPlanSummary;
  startDate: string;
  endDate: string;
  isActive: boolean;
  paymentsCount: number;
  lastPayment?: SubscriptionPaymentSummary;
}

export interface ClubSubscriptionSummary {
  subscriptionId: string;
  plan: SubscriptionPlanSummary;
  startDate: string;
  endDate: string;
  isActive: boolean;
}

export interface CreateClubSubscriptionRequest {
  planId: string;
}
