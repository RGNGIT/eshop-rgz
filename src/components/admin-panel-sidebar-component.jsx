import React from "react";

export function Sidebar({ dictionaries, currentDictionary, onSelectDictionary }) {
  return (
    <div style={{ width: "200px", borderRight: "1px solid #ccc" }}>
      <h5 style={{ borderBottom: "1px solid #ccc" }}>Сущности</h5>
      <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
        {dictionaries.map((dictionary) => (
          <li
            key={dictionary}
            style={{
              padding: "12.1px 0",
              borderBottom: "1px solid #ccc",
              cursor: "pointer",
              fontWeight: currentDictionary === dictionary ? "bold" : "normal",
            }}
            onClick={() => onSelectDictionary(dictionary)}
          >
            {dictionary}
          </li>
        ))}
      </ul>
    </div>
  );
};