import React from "react";
import '../styles/management.css';

export function Header({ title }) {
  return (
    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "10px", borderBottom: "1px solid #ccc" }}>
      <h2>{title}</h2>
    </div>
  );
};