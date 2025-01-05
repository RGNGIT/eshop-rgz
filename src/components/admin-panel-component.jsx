import React, { useEffect, useState } from "react";
import { Sidebar } from "./admin-panel-sidebar-component";
import { Header } from "./admin-panel-header";
import { DataList } from "./admin-panel-datalist";
import {
  getAllAddressees,
  getAllCarcasses,
  getAllColors,
  getAllCountries,
  getAllLocalities,
  getAllLocalityTypes,
  getAllMarks,
  getAllModels,
  getAllStreets,
  getAllStreetTypes,
  getAllVehicles,
  getAllVehicleTypes,
  getAllRegistrations
} from "../api";

export function AdminPanel() {
  const dictionaries = [
    "Цвет",
    "Тип кузова",
    "Страна",
    "Тип транспортного средства",
    "Тип населенного пункта",
    "Тип улицы",
    "Населенный пункт",
    "Улица",
    "Адрес",
    "Транспортное средство",
    "Марка",
    "Модель",
    "Регистрация"
  ];

  const [currentDictionary, setCurrentDictionary] = useState(dictionaries[0]);
  const [data, setData] = useState([]);

  const dictionaryFetchMap = {
    "Цвет": getAllColors,
    "Тип кузова": getAllCarcasses,
    "Страна": getAllCountries,
    "Тип транспортного средства": getAllVehicleTypes,
    "Тип населенного пункта": getAllLocalityTypes,
    "Тип улицы": getAllStreetTypes,
    "Населенный пункт": getAllLocalities,
    "Улица": getAllStreets,
    "Адрес": getAllAddressees,
    "Транспортное средство": getAllVehicles,
    "Марка": getAllMarks,
    "Модель": getAllModels,
    "Регистрация": getAllRegistrations
  };

  const dataMapping = {
    "Цвет": (data) => data.map((e) => ({ ИД: e.id, Наименование: e.name })),
    "Тип кузова": (data) => data.map((e) => ({ ИД: e.id, Наименование: e.name })),
    "Страна": (data) => data.map((e) => ({ ИД: e.id, Наименование: e.name, "Аббревиатура": e.abbr })),
    "Тип транспортного средства": (data) => data.map((e) => ({ ИД: e.id, Наименование: e.name })),
    "Тип населенного пункта": (data) => data.map((e) => ({ ИД: e.id, Наименование: e.name })),
    "Тип улицы": (data) => data.map((e) => ({ ИД: e.id, Наименование: e.name })),
    "Населенный пункт": (data) =>
      data.map((e) => ({
        ИД: e.id,
        Наименование: e.name,
        "Тип населенного пункта": e.locality_type.name,
      })),
    "Улица": (data) =>
      data.map((e) => ({
        ИД: e.id,
        Наименование: e.name,
        "Тип улицы": e.street_type.name,
      })),
    "Адрес": (data) =>
      data.map((e) => ({
        ИД: e.id,
        "Номер дома": e.house_number,
        "Номер квартиры": e.appartment_number,
        "Индекс": e.index,
        "Резидент": `${e.user.last_name} ${e.user.name} ${e.user.middle_name}`,
        "Улица": e.street.name,
        "Населенный пункт": e.locality.name,
      })),
    "Транспортное средство": (data) => data.map((e) => ({ ИД: e.id, "Дата выпуска": e.release_date, "Номер двигателя": e.engine_number, "Тип": e.vehicle_type.name, "Модель": e.vehicle_model.name, "Кузов": e.carcas.name, "Цвет": e.color.name })),
    "Марка": (data) => data.map((e) => ({ ИД: e.id, Наименование: e.name, "Краткое наименование": e.short_name, "Страна": e.country.name })),
    "Модель": (data) => data.map((e) => ({ ИД: e.id, Наименование: e.name, "Краткое наименование": e.short_name, "Марка": e.vehicle_mark.name })),
    "Регистрация": (data) => data.map((e) => ({ ИД: e.id, "Номер": e.number, "Дата": e.date, "Транспортное средство": `${e.vehicle.vehicle_model.vehicle_mark.name} ${e.vehicle.vehicle_model.name} (${e.vehicle.vehicle_model.vehicle_mark.short_name}, ${e.vehicle.vehicle_model.short_name})`, "Владелец": `${e.user.last_name} ${e.user.name} ${e.user.middle_name}` }))
  };

  // Тут модалку открыть на креейт
  const handleAdd = () => {
    const newItem = { id: Date.now(), name: "Новое значение" };
    setData((prevData) => [...prevData, newItem]);
  };

  useEffect(() => {
    const fetchData = async () => {
      const fetchFunction = dictionaryFetchMap[currentDictionary];
      if (!fetchFunction) return;

      try {
        const fetchedData = await fetchFunction();

        if (fetchedData.status !== 200) {
          alert(fetchedData.data);
        } else {
          const mapper = dataMapping[currentDictionary];
          const mappedData = mapper ? mapper(fetchedData.data) : [];

          if (JSON.stringify(mappedData) !== JSON.stringify(data)) {
            setData(mappedData);
          }
        }
      } catch (error) {
        console.log(`Error: ${error.message}`);
      }
    };

    fetchData();
  }, [currentDictionary, data]);

  return (
    <div style={{ display: "flex", height: "100vh" }}>
      <Sidebar
        dictionaries={dictionaries}
        currentDictionary={currentDictionary}
        onSelectDictionary={setCurrentDictionary}
      />
      <div style={{ flex: 1, display: "flex", flexDirection: "column" }}>
        <Header title={currentDictionary} onAdd={handleAdd} />
        <div style={{ flex: 1, overflow: "auto" }}>
          <DataList data={data} entity={currentDictionary} setData={setData} />
        </div>
      </div>
    </div>
  );
}
