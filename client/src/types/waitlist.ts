export interface WaitlistFormData {
  name: string;
  email: string;
  company: string;
}

export interface WaitlistEntry extends WaitlistFormData {
  id: string;
  createdAt: string | Date;
}

export interface ApiResponse<T = any> {
  success: boolean;
  message?: string;
  error?: string;
  data?: T;
  count?: number;
}
