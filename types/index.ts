export enum Role {
  ADMIN = "ADMIN",
  USER = "USER",
  AGENT = "AGENT",
}

export enum Status {
  ACTIVE = "ACTIVE",
  BLOCKED = "BLOCKED",
}

export enum PropertyType {
  APARTMENT = "APARTMENT",
  LAND = "LAND",
  HOUSE = "HOUSE",
}

export enum PropertyStatus {
  AVAILABLE = "AVAILABLE",
  RENTED = "RENTED",
  SOLD = "SOLD",
}

export interface IUser {
  _id: string;
  name: string;
  email: string;
  role: Role;
  phone?: string;
  picture?: string;
  status?: Status;
  createdAt?: string;
  updatedAt?: string;
}

export interface IProperty {
  _id: string;
  title: string;
  description: string;
  price: number;
  location: {
    address: string;
    city: string;
    area: string;
  };
  propertyType: PropertyType;
  status: PropertyStatus;
  images: string;
  agentId: IUser | string;
  createdAt?: string;
  updatedAt?: string;
}

export interface IStats {
  totalUsers: number;
  totalAgents: number;
  totalProperty: number;
  availableProperty: number;
}

export interface ApiResponse<T> {
  success: boolean;
  statusCode: number;
  message: string;
  data: T;
  meta?: { total: number };
}

export interface LoginPayload {
  email: string;
  password: string;
}

export interface LoginResponse {
  userWithOutPassword: IUser;
  accessToken: string;
  refreshToken: string;
}

export interface AuthState {
  user: IUser | null;
  isLoading: boolean;
  isAuthenticated: boolean;
}
