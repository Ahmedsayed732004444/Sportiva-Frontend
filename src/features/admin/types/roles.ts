export interface RoleResponse {
  id: string;
  name: string;
  isDeleted: boolean;
}

export interface RoleDetailResponse {
  id: string;
  name: string;
  isDeleted: boolean;
  permissions: string[];
}

export interface RoleRequest {
  name: string;
  permissions: string[];
}
