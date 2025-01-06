import React, { useState } from "react";
import { deleteEntity } from '../api/common-service';
import { ConfirmModal } from "./modals/confirm-modal";
import { EditModal } from "./modals/edit-modal";

export function CrudButtons({ id, entity, data, setData }) {
  const [isDeletionModalOpen, setIsDeletionModalOpen] = useState(false);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);

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

  function openEditModal() {
    setIsEditModalOpen(true);
  }

  function closeEditModal() {
    setIsEditModalOpen(false);
  }

  return (
    <div>
      <button
        className="crud-button"
        style={{ marginRight: "15px" }}
        onClick={openEditModal}
      >
        Редактировать
      </button>
      <button className="crud-button" onClick={openDeletionModal}>
        Удалить
      </button>
      {isDeletionModalOpen && (<ConfirmModal message={"Вы точно желаете удалить запись?"} onConfirm={confirmDelete} onCloseModal={closeDeletionModal} />)}
      {isEditModalOpen && (<EditModal entity={entity} id={id} data={data} setData={setData} closeModal={closeEditModal} />)}
    </div>
  );
}