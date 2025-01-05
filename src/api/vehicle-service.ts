import { ApiResponse } from '.';
import apiClient from './config'

export const getAllVehicles = async (): Promise<ApiResponse> => {
  try {
    const response = await apiClient.get('/vehicles/all');
    return { status: response.status, data: response.data };
  }
  catch (e: any) {
    return { status: e.response.status, data: e.response.data };
  }
};

export const getAllMarks = async (): Promise<ApiResponse> => {
  try {
    const response = await apiClient.get('/vehicles/marks/all');
    return { status: response.status, data: response.data };
  }
  catch (e: any) {
    return { status: e.response.status, data: e.response.data };
  }
};

export const getAllModels = async (): Promise<ApiResponse> => {
  try {
    const response = await apiClient.get('/vehicles/models/all');
    return { status: response.status, data: response.data };
  }
  catch (e: any) {
    return { status: e.response.status, data: e.response.data };
  }
};