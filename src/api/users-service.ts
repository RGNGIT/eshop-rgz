import { ApiResponse } from '.';
import apiClient from './config';

interface User {
  name: string;
  login: string;
  lastName: string;
  middleName: string;
  dob: Date;
  passport_serial: string;
  passport_number: string;
  issued: string;
  address: string;
  password: string;
  confirm_password: string;
  role: string;
}

export const getAllUsers = async (): Promise<ApiResponse> => {
  try {
    const response = await apiClient.get('/users/all');
    return { status: response.status, data: response.data };
  }
  catch (e: any) {
    return { status: e.response.status, data: e.response.data };
  }
};

export const register = async (user: User): Promise<ApiResponse> => {
  try {
    const response = await apiClient.post('/users/register', user);
    return { status: response.status, data: response.data };
  }
  catch (e: any) {
    return { status: e.response.status, data: e.response.data };
  }
};

export const login = async (user: User): Promise<ApiResponse> => {
  try {
    const response = await apiClient.post('/users/login', user);
    return { status: response.status, data: response.data };
  }
  catch (e: any) {
    return { status: e.response.status, data: e.response.data };
  }
};

export const getCurrentUserInfo = async (): Promise<ApiResponse> => {
  try {
    const token = localStorage.getItem("userToken");
    if (!token)
      console.log("Get current info with token failed. No valid token.");

    const response = await apiClient.post('/users/current', { token });
    return { status: response.status, data: response.data };
  }
  catch (e: any) {
    return { status: e.response.status, data: e.response.data };
  }
}