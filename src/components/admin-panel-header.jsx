import React from "react";
import '../styles/management.css';
import { isAdmin } from "../utils";

export function Header({ title, onAdd }) {
  return (
    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "10px", borderBottom: "1px solid #ccc" }}>
      <h2>{title}</h2>
      {(
        isAdmin() ? <button class="add-button" onClick={onAdd}>Добавить</button> : ""
      )}
    </div>
  );
};