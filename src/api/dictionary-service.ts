import { ApiResponse } from '.';
import apiClient from './config';

export const getAllColors = async (): Promise<ApiResponse> => {
  try {
    const response = await apiClient.get('/dictionaries/colors/all');
    return { status: response.status, data: response.data };
  }
  catch (e: any) {
    return { status: e.response.status, data: e.response.data };
  }
};

export const getAllCarcasses = async (): Promise<ApiResponse> => {
  try {
    const response = await apiClient.get('/dictionaries/carcasses/all');
    return { status: response.status, data: response.data };
  }
  catch (e: any) {
    return { status: e.response.status, data: e.response.data };
  }
};

export const getAllCountries = async (): Promise<ApiResponse> => {
  try {
    const response = await apiClient.get('/dictionaries/countries/all');
    return { status: response.status, data: response.data };
  }
  catch (e: any) {
    return { status: e.response.status, data: e.response.data };
  }
};

export const getAllVehicleTypes = async (): Promise<ApiResponse> => {
  try {
    const response = await apiClient.get('/dictionaries/vehicle-types/all');
    return { status: response.status, data: response.data };
  }
  catch (e: any) {
    return { status: e.response.status, data: e.response.data };
  }
};

export const getAllLocalityTypes = async (): Promise<ApiResponse> => {
  try {
    const response = await apiClient.get('/dictionaries/locality-types/all');
    return { status: response.status, data: response.data };
  }
  catch (e: any) {
    return { status: e.response.status, data: e.response.data };
  }
};

export const getAllStreetTypes = async (): Promise<ApiResponse> => {
  try {
    const response = await apiClient.get('/dictionaries/street-types/all');
    return { status: response.status, data: response.data };
  }
  catch (e: any) {
    return { status: e.response.status, data: e.response.data };
  }
};

export const getCarouselData = async (): Promise<ApiResponse> => {
  try {
    const response = await apiClient.get('/dictionaries/carousel');
    return { status: response.status, data: response.data };
  }
  catch (e: any) {
    return { status: e.response.status, data: e.response.data };
  }
};