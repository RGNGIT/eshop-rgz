import '../../styles/modal.css';

export function ConfirmModal({ message, onConfirm, onCloseModal }) {
  return <div className="modal-overlay">
    <div className="modal">
      <p>{message}</p>
      <div className="modal-buttons">
        <button style={{ marginRight: "15px" }} className="modal-button" onClick={onConfirm}>
          Да
        </button>
        <button className="modal-button" onClick={onCloseModal}>
          Нет
        </button>
      </div>
    </div>
  </div>
}