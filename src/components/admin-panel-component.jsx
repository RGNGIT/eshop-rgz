import React, { useState } from "react";
import { Sidebar } from "./admin-panel-sidebar-component";
import { Header } from "./admin-panel-header";
import { DataList } from "./admin-panel-datalist";

export function AdminPanel() {
  const [dictionaries] = useState(["Справочник 1", "Справочник 2", "Справочник 3"]);
  const [currentDictionary, setCurrentDictionary] = useState(dictionaries[0]);
  const [data, setData] = useState([
    { id: 1, name: "Элемент 1", value: "Значение 1" },
    { id: 2, name: "Элемент 2", value: "Значение 2" },
  ]);

  const handleAdd = () => {
    const newItem = { id: Date.now(), name: "Новый элемент", value: "Новое значение" };
    setData((prevData) => [...prevData, newItem]);
  };

  return (
    <div style={{ display: "flex", height: "100vh" }}>
      <Sidebar
        dictionaries={dictionaries}
        currentDictionary={currentDictionary}
        onSelectDictionary={setCurrentDictionary}
      />
      <div style={{ flex: 1, display: "flex", flexDirection: "column" }}>
        <Header title={currentDictionary} onAdd={handleAdd} />
        <div style={{ flex: 1, overflow: "auto" }}>
          <DataList data={data} />
        </div>
      </div>
    </div>
  );
};