import React, { useState } from "react";
import '../../styles/modal.css';

const entityPropertiesMap = {
  "Цвет": <></>,
  "Тип кузова": <></>,
  "Страна": <></>,
  "Тип транспортного средства": <></>,
  "Тип населенного пункта": <></>,
  "Тип улицы": <></>,
  "Населенный пункт": <></>,
  "Улица": <></>,
  "Адрес": <></>,
  "Транспортное средство": <></>,
  "Марка": <></>,
  "Модель": <></>,
  "Регистрация": <></>
};

export function EditModal({ entity, id, onSubmitEntity, onCloseModal }) {
    const [formData, setFormData] = useState({});
    
  function onInputChange() {

  }

  return <div className="modal-overlay">
    <div className="modal">
      <form onSubmit={onSubmitEntity}>
        {entityPropertiesMap[entity]}
        <button className="modal-button" onClick={onCloseModal}>
          Отменить
        </button>
      </form>
    </div>
  </div>
}