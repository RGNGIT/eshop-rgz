import React, { useState } from "react";
import '../../styles/modal.css';

export function EditModal({ entity, id, onCloseModal }) {
  const [formData, setFormData] = useState({
    name: ""
  });

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
      />
    ],
    "Населенный пункт": <></>,
    "Улица": <></>,
    "Адрес": <></>,
    "Транспортное средство": <></>,
    "Марка": <></>,
    "Модель": <></>,
    "Регистрация": <></>
  };

  function onInputChange(e) {
    setFormData(prevFormData => ({
      ...prevFormData,
      [e.target.name]: e.target.value
    }));
  }

  function onSubmitEntity() {
    
  }

  return <div className="modal-overlay">
    <div className="modal">
      {entityPropertiesMap[entity]}
      <button className="modal-button" onClick={onSubmitEntity}>
        Применить
      </button>
      <button className="modal-button" onClick={onCloseModal}>
        Отменить
      </button>
    </div>
  </div>
}