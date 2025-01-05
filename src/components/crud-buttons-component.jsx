import React, { useState } from "react";
import { deleteEntity } from '../api/common-service';
import "../styles/crud-modal.css";

export function CrudButtons({ id, entity, data, setData }) {
  const [isDeletionModalOpen, setIsDeletionModalOpen] = useState(false);

  function openDeletionModal() {
    setIsDeletionModalOpen(true);
  }

  function closeModal() {
    setIsDeletionModalOpen(false);
  }

  function confirmDelete() {
    setData(data.filter(item => item.ИД != id));
    deleteEntity(entity, id);
    closeModal();
  }

  return (
    <div>
      <button
        className="crud-button"
        style={{ marginRight: "15px" }}
        onClick={() => console.log(`Редактировать ${entity} с ID: ${id}`)}
      >
        Редактировать
      </button>
      <button className="crud-button" onClick={openDeletionModal}>
        Удалить
      </button>
      {isDeletionModalOpen && (
        <div className="modal-overlay">
          <div className="modal">
            <p>Вы уверены что хотите удалить запись?</p>
            <div className="modal-buttons">
              <button style={{ marginRight: "15px" }} className="modal-button" onClick={confirmDelete}>
                Да
              </button>
              <button className="modal-button" onClick={closeModal}>
                Нет
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}