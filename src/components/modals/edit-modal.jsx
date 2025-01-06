import React, { useState } from "react";
import { editEntity } from '../../api';
import '../../styles/modal.css';

export function EditModal({ entity, id, data, setData, closeModal }) {
  const [formData, setFormData] = useState({
    name: ""
  });

  const propertiesMap = {
    "name": "Наименование"
  };

  const entityPropertiesMap = {
    "Цвет": [
      <input
        type="text"
        name="name"
        placeholder="Цвет"
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
        placeholder="Тип кузова"
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
        placeholder="Страна"
        value={formData.name}
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
        placeholder="Тип транспортного средства"
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
        placeholder="Тип населенного пункта"
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
        placeholder="Тип улицы"
        value={formData.name}
        onChange={onInputChange}
        className="entity-data-input"
        required
        autocomplete="off"
      />
    ],
    "Населенный пункт": [],
    "Улица": [],
    "Адрес": [],
    "Транспортное средство": [],
    "Марка": [],
    "Модель": [],
    "Регистрация": []
  };

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