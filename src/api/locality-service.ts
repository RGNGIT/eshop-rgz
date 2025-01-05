import { ApiResponse } from '.';
import apiClient from './config'

export const getAllLocalities = async (): Promise<ApiResponse> => {
  try {
    const response = await apiClient.get('/localities/all');
    return { status: response.status, data: response.data };
  }
  catch (e: any) {
    return { status: e.response.status, data: e.response.data };
  }
};

export const getAllStreets = async (): Promise<ApiResponse> => {
  try {
    const response = await apiClient.get('/localities/streets/all');
    return { status: response.status, data: response.data };
  }
  catch (e: any) {
    return { status: e.response.status, data: e.response.data };
  }
};

export const getAllAddressees = async (): Promise<ApiResponse> => {
  try {
    const response = await apiClient.get('/localities/addresses/all');
    return { status: response.status, data: response.data };
  }
  catch (e: any) {
    return { status: e.response.status, data: e.response.data };
  }
};