import { ApiResponse } from '.';
import apiClient from './config';

export const getCarouselData = async (): Promise<ApiResponse> => {
  try {
    const response = await apiClient.get('/dictionaries/carousel');
    return { status: response.status, data: response.data };
  }
  catch (e: any) {
    return { status: e.response.status, data: e.response.data };
  }
};