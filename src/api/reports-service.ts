import { ApiResponse } from '.';
import apiClient from './config'

export const getReport1Data = async (): Promise<ApiResponse> => {
  try {
    const response = await apiClient.get('/reports/1');
    return { status: response.status, data: response.data };
  }
  catch (e: any) {
    return { status: e.response.status, data: e.response.data };
  }
};

export const getReport2Data = async (userId: string): Promise<ApiResponse> => {
  try {
    const response = await apiClient.get(`/reports/2/${userId}`);
    return { status: response.status, data: response.data };
  }
  catch (e: any) {
    return { status: e.response.status, data: e.response.data };
  }
};

export const getReport3Data = async (vehicleId: string): Promise<ApiResponse> => {
  try {
    const response = await apiClient.get(`/reports/3/${vehicleId}`);
    return { status: response.status, data: response.data };
  }
  catch (e: any) {
    return { status: e.response.status, data: e.response.data };
  }
};

export const getReport4Data = async (countryId: string, markId: string): Promise<ApiResponse> => {
  try {
    const response = await apiClient.get(`/reports/4/${countryId}/${markId}`);
    return { status: response.status, data: response.data };
  }
  catch (e: any) {
    return { status: e.response.status, data: e.response.data };
  }
};