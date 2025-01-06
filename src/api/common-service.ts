import { ApiResponse } from ".";
import apiClient from "./config";

const entityMap: { [key: string]: string } = {
  "Цвет": "/dictionaries/colors",
  "Тип кузова": "/dictionaries/carcasses",
  "Страна": "/dictionaries/countries",
  "Тип транспортного средства": "/dictionaries/vehicle-types",
  "Тип населенного пункта": "/dictionaries/locality-types",
  "Тип улицы": "/dictionaries/street-types",
  "Населенный пункт": "/localities",
  "Улица": "/localities/streets",
  "Адрес": "/localities/addresses",
  "Транспортное средство": "/vehicles",
  "Марка": "/vehicles/marks",
  "Модель": "/vehicles/models",
  "Регистрация": "/registrations"
};

export const deleteEntity = async (entity: string, id: number): Promise<ApiResponse> => {
  try {
    const response = await apiClient.delete(`${entityMap[entity]}/delete`, { data: { id } });
    return { status: response.status, data: response.data };
  }
  catch (e: any) {
    return { status: e.response.status, data: e.response.data };
  }
}

export const editEntity = async (entity: string, id: number, payload: {}): Promise<ApiResponse> => {
  try {
    const response = await apiClient.patch(`${entityMap[entity]}/edit`, { data: { id, payload } });
    return { status: response.status, data: response.data };
  }
  catch (e: any) {
    return { status: e.response.status, data: e.response.data };
  }
}