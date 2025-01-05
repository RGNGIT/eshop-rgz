import React, { useState } from "react";
import { deleteEntity } from '../api/common-service';
import { ConfirmModal } from "./modals/confirm-modal";

export function CrudButtons({ id, entity, data, setData }) {
  const [isDeletionModalOpen, setIsDeletionModalOpen] = useState(false);

  function openDeletionModal() {
    setIsDeletionModalOpen(true);
  }

  function closeDeletionModal() {
    setIsDeletionModalOpen(false);
  }

  function confirmDelete() {
    setData(data.filter(item => item.ИД != id));
    deleteEntity(entity, id);
    closeDeletionModal();
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
      {isDeletionModalOpen && (<ConfirmModal message={"Вы точно желаете удалить запись?"} onConfirm={confirmDelete} onCloseModal={closeDeletionModal} />)}
    </div>
  );
}