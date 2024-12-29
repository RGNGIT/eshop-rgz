import apiClient from './config';

interface Item {
  name: string;
  image: string;
}

export const getTrendingItems = async (): Promise<Item[]> => {
  const response = await apiClient.get('/items/trending');
  return response.data;
};