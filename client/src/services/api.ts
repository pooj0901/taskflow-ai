import axios from 'axios';
import { WaitlistFormData, WaitlistEntry, ApiResponse } from '../types/waitlist';

const getApiBaseUrl = () => {
  const envUrl = import.meta.env.VITE_API_URL;
  if (envUrl) {
    return envUrl.endsWith('/api') ? envUrl : `${envUrl.replace(/\/$/, '')}/api`;
  }
  return "https://taskflow-ai-jmqh.onrender.com/api";
};

const apiClient = axios.create({
  baseURL: getApiBaseUrl(),
  headers: {
    "Content-Type": "application/json",
  },
});

export const submitWaitlist = async (data: WaitlistFormData): Promise<ApiResponse<WaitlistEntry>> => {
  try {
    const response = await apiClient.post<ApiResponse<WaitlistEntry>>('/waitlist', data);
    return response.data;
  } catch (error: any) {
    if (error.response && error.response.data) {
      return error.response.data;
    }
    // Fallback error format
    return {
      success: false,
      error: error.message || 'Unable to connect to waitlist server. Please check connection.',
    };
  }
};

export const fetchWaitlist = async (): Promise<ApiResponse<WaitlistEntry[]>> => {
  try {
    const response = await apiClient.get<ApiResponse<WaitlistEntry[]>>('/waitlist');
    return response.data;
  } catch (error: any) {
    if (error.response && error.response.data) {
      return error.response.data;
    }
    return {
      success: false,
      error: error.message || 'Failed to fetch waitlist entries.',
      data: [],
    };
  }
};
