import React, { useState, useEffect } from "react";
import '../../styles/modal.css';
import { createEntity, editEntity, getAllCarcasses, getAllColors, getAllLocalities, getAllModels, getAllStreets, getAllUsers, getAllVehicles, getAllVehicleTypes } from '../../api';
import { ComboBox } from "../combo-box-component";

export function EditModal({ entity, id, data, setData, closeModal }) {
  const [formData, setFormData] = useState({
    name: ""
  });

  const [cachedUsers, setCachedUsers] = useState([]);
  const [cachedStreets, setCachedStreets] = useState([]);
  const [cachedLocalities, setCachedLocalities] = useState([]);
  const [cachedVehicles, setCachedVehicles] = useState([]);
  const [cachedVehicleTypes, setCachedVehicleTypes] = useState([]);
  const [cachedVehicleModels, setCachedVehicleModels] = useState([]);
  const [cachedCarcases, setCachedCarcases] = useState([]);
  const [cachedColors, setCachedColors] = useState([]);

  const propertiesMap = {
    "name": "Наименование",
    "abbr": "Аббревиатура",
    "house_number": "Номер дома",
    "appartment_number": "Номер квартиры",
    "index": "Индекс",
    "number": "Номер",
    "date": "Дата",
    "release_date": "Дата выпуска",
    "engine_number": "Номер двигателя"
  };

  const entityPropertiesMap = {
    "Цвет": [
      <input
        type="text"
        name="name"
        placeholder="Наименование"
        value={formData.name}
        onChange={onInputChange}
        className="entity-data-input"
        required
        autocomplete="off"
      />
    ],
    "Тип кузова": [
      <input
        type="text"
        name="name"
        placeholder="Наименование"
        value={formData.name}
        onChange={onInputChange}
        className="entity-data-input"
        required
        autocomplete="off"
      />
    ],
    "Страна": [
      <input
        type="text"
        name="name"
        placeholder="Наименование"
        value={formData.name}
        onChange={onInputChange}
        className="entity-data-input"
        required
        autocomplete="off"
      />,
      <input
        type="text"
        name="abbr"
        placeholder="Аббревиатура"
        value={formData.abbr}
        onChange={onInputChange}
        className="entity-data-input"
        required
        autocomplete="off"
      />
    ],
    "Тип транспортного средства": [
      <input
        type="text"
        name="name"
        placeholder="Наименование"
        value={formData.name}
        onChange={onInputChange}
        className="entity-data-input"
        required
        autocomplete="off"
      />
    ],
    "Тип населенного пункта": [
      <input
        type="text"
        name="name"
        placeholder="Наименование"
        value={formData.name}
        onChange={onInputChange}
        className="entity-data-input"
        required
        autocomplete="off"
      />
    ],
    "Тип улицы": [
      <input
        type="text"
        name="name"
        placeholder="Наименование"
        value={formData.name}
        onChange={onInputChange}
        className="entity-data-input"
        required
        autocomplete="off"
      />
    ],
    "Населенный пункт": [],
    "Улица": [],
    "Адрес": [
      <input
        type="text"
        name="house_number"
        placeholder="Номер дома"
        value={formData.house_number}
        onChange={onInputChange}
        className="entity-data-input"
        required
        autocomplete="off"
      />,
      <input
        type="text"
        name="appartment_number"
        placeholder="Номер квартиры"
        value={formData.appartment_number}
        onChange={onInputChange}
        className="entity-data-input"
        required
        autocomplete="off"
      />,
      <input
        type="text"
        name="index"
        placeholder="Индекс"
        value={formData.index}
        onChange={onInputChange}
        className="entity-data-input"
        required
        autocomplete="off"
      />,
      <ComboBox label={"Резидент"} items={cachedUsers} displayProperty={"name"} onChange={setComplexProperty} />,
      <ComboBox label={"Улица"} items={cachedStreets} displayProperty={"name"} onChange={setComplexProperty} />,
      <ComboBox label={"Населенный пункт"} items={cachedLocalities} displayProperty={"name"} onChange={setComplexProperty} />
    ],
    "Транспортное средство": [
      <input
        type="date"
        name="release_date"
        placeholder="Дата выпуска"
        value={formData.release_date}
        onChange={onInputChange}
        className="entity-data-input"
        required
        autocomplete="off"
      />,
      <input
        type="text"
        name="engine_number"
        placeholder="Номер двигателя"
        value={formData.engine_number}
        onChange={onInputChange}
        className="entity-data-input"
        required
        autocomplete="off"
      />,
      <ComboBox label={"Тип"} items={cachedVehicleTypes} displayProperty={"name"} onChange={setComplexProperty} />,
      <ComboBox label={"Модель"} items={cachedVehicleModels} displayProperty={"name"} onChange={setComplexProperty} />,
      <ComboBox label={"Кузов"} items={cachedCarcases} displayProperty={"name"} onChange={setComplexProperty} />,
      <ComboBox label={"Цвет"} items={cachedColors} displayProperty={"name"} onChange={setComplexProperty} />
    ],
    "Марка": [],
    "Модель": [],
    "Регистрация": [
      <input
        type="text"
        name="number"
        placeholder="Номер"
        value={formData.number}
        onChange={onInputChange}
        className="entity-data-input"
        required
        autocomplete="off"
      />,
      <input
        type="date"
        name="date"
        placeholder="Дата"
        value={formData.date}
        onChange={onInputChange}
        className="entity-data-input"
        required
        autocomplete="off"
      />,
      <ComboBox label={"Транспортное средство"} items={cachedVehicles} displayProperty={"name"} onChange={setComplexProperty} />,
      <ComboBox label={"Владелец"} items={cachedUsers} displayProperty={"name"} onChange={setComplexProperty} />
    ]
  };

  useEffect(() => {
    const cacheUsers = async () => {
      const users = await getAllUsers();
      if (users.status != 200)
        alert(users.data)
      else
        setCachedUsers(users.data.map(e => ({ property: "user_id", id: e.id, name: `${e.last_name} ${e.name} ${e.middle_name}` })));
    };

    const cacheStreets = async () => {
      const users = await getAllStreets();
      if (users.status != 200)
        alert(users.data)
      else
        setCachedStreets(users.data.map(e => ({ property: "street_id", id: e.id, name: e.name })));
    };

    const cacheLocalities = async () => {
      const users = await getAllLocalities();
      if (users.status != 200)
        alert(users.data)
      else
        setCachedLocalities(users.data.map(e => ({ property: "locality_id", id: e.id, name: e.name })));
    };

    const cacheVehicles = async () => {
      const users = await getAllVehicles();

      if (users.status != 200)
        alert(users.data)
      else
        setCachedVehicles(users.data.map(e => ({ property: "vehicle_id", id: e.id, name: `${e.vehicle_model.vehicle_mark.name} ${e.vehicle_model.name} (${e.vehicle_model.vehicle_mark.short_name}, ${e.vehicle_model.short_name})` })));
    };

    const cacheVehiclesTypes = async () => {
      const users = await getAllVehicleTypes();

      if (users.status != 200)
        alert(users.data)
      else
        setCachedVehicleTypes(users.data.map(e => ({ property: "vehicle_type_id", id: e.id, name: e.name })));
    };

    const cacheVehiclesModels = async () => {
      const users = await getAllModels();

      if (users.status != 200)
        alert(users.data)
      else
        setCachedVehicleModels(users.data.map(e => ({ property: "vehicle_model_id", id: e.id, name: e.name })));
    };

    const cacheCarcases = async () => {
      const users = await getAllCarcasses();

      if (users.status != 200)
        alert(users.data)
      else
        setCachedCarcases(users.data.map(e => ({ property: "carcas_id", id: e.id, name: e.name })));
    };

    const cacheColors = async () => {
      const users = await getAllColors();

      if (users.status != 200)
        alert(users.data)
      else
        setCachedColors(users.data.map(e => ({ property: "color_id", id: e.id, name: e.name })));
    };

    cacheUsers();
    cacheStreets();
    cacheLocalities();
    cacheVehicles();
    cacheVehiclesTypes();
    cacheVehiclesModels();
    cacheCarcases();
    cacheColors();
  }, []);

  function setComplexProperty(e) {
    setFormData(prevFormData => ({
      ...prevFormData,
      [e.property]: e.id
    }));
  }

  function onInputChange(e) {
    setFormData(prevFormData => ({
      ...prevFormData,
      [e.target.name]: e.target.value
    }));
  }

  function onSubmitEntity() {
    const updateData = async () => {
      const response = await editEntity(entity, id, formData);
      if (response.status != 200)
        alert(response.data);
      else {
        const deepClonedData = structuredClone(data);
        for (const key in formData) {
          if (deepClonedData.hasOwnProperty(propertiesMap[key])) {
            deepClonedData[propertiesMap[key]] = formData[key];
          }
        }

        setData(deepClonedData);
      }
    }

    updateData();
    closeModal();
  }

  return <div className="modal-overlay">
    <div className="modal">
      <p>Редактируем сущность в виде гномика</p>
      {entityPropertiesMap[entity]}
      <button style={{ marginRight: "15px" }} className="modal-button" onClick={onSubmitEntity}>
        Применить
      </button>
      <button className="modal-button" onClick={closeModal}>
        Отменить
      </button>
    </div>
  </div>
}