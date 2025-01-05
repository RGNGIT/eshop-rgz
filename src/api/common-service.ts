import { ApiResponse } from ".";
import apiClient from "./config";

const entityDeleteMap: { [key: string]: string } = {
  "Цвет": "/dictionaries/colors",
  "Тип кузова": "/dictionaries/carcasses",
  "Страна": "/dictionaries/countries",
  "Тип транспортного средства": "/dictionaries/vehicle-types",
  "Тип населенного пункта": "/dictionaries/locality-types",
  "Тип улицы": "/dictionaries/street-types"
};

export const deleteEntity = async (entity: string, id: number): Promise<ApiResponse> => {
  try {
    const response = await apiClient.delete(`${entityDeleteMap[entity]}/delete`, { data: { id } });
    return { status: response.status, data: response.data };
  }
  catch (e: any) {
    return { status: e.response.status, data: e.response.data };
  }
}