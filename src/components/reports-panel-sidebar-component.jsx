import React from "react";

export function Sidebar({ reports, currentReport, onSelectReport }) {
  return (
    <div style={{ width: "300px", borderRight: "1px solid #ccc" }}>
      <h5 style={{ borderBottom: "1px solid #ccc" }}>Отчеты</h5>
      <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
        {reports.map((dictionary) => (
          <li
            key={dictionary}
            style={{
              padding: "12.1px 0",
              borderBottom: "1px solid #ccc",
              cursor: "pointer",
              fontWeight: currentReport === dictionary ? "bold" : "normal",
            }}
            onClick={() => onSelectReport(dictionary)}
          >
            {dictionary}
          </li>
        ))}
      </ul>
    </div>
  );
};