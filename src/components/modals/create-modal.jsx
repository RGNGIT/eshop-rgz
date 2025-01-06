import React, { useEffect, useState } from "react";
import { createEntity, editEntity, getAllLocalities, getAllStreets, getAllUsers, getAllVehicles } from '../../api';
import '../../styles/modal.css';
import { ComboBox } from "../combo-box-component";

export function CreateModal({ entity, data, setData, closeModal }) {
  const [formData, setFormData] = useState({
    name: ""
  });

  const [cachedUsers, setCachedUsers] = useState([]);
  const [cachedStreets, setCachedStreets] = useState([]);
  const [cachedLocalities, setCachedLocalities] = useState([]);
  const [cachedVehicles, setCachedVehicles] = useState([]);

  const propertiesMap = {
    "name": "Наименование",
    "abbr": "Аббревиатура",
    "house_number": "Номер дома",
    "appartment_number": "Номер квартиры",
    "index": "Индекс",
    "number": "Номер",
    "date": "Дата"
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
    "Транспортное средство": [],
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

    cacheUsers();
    cacheStreets();
    cacheLocalities();
    cacheVehicles();
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
    const insertData = async () => {
      const response = await createEntity(entity, formData);
      if (response.status != 200)
        alert(response.data);
      else {
        const deepClonedData = structuredClone(data);
        deepClonedData.push(formData);

        setData(deepClonedData);
      }
    }

    insertData();
    closeModal();
  }

  return <div className="modal-overlay">
    <div className="modal">
      <p>Создаем сущность в виде гномика</p>
      {entityPropertiesMap[entity]}
      <button style={{ marginRight: "15px" }} className="modal-button" onClick={onSubmitEntity}>
        Создать
      </button>
      <button className="modal-button" onClick={closeModal}>
        Отменить
      </button>
    </div>
  </div>
}