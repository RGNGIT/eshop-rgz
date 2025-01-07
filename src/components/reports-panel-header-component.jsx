import React, { useEffect, useState } from "react";
import '../styles/management.css';
import { ComboBox } from "./combo-box-component";
import { getAllCountries, getAllMarks, getAllUsers, getAllVehicles } from "../api";

export function Header({ title, onSelectEntity, onAnotherSelectEntity }) {
  const [cachedUsers, setCachedUsers] = useState([]);
  const [cachedVehicles, setCachedVehicles] = useState([]);
  const [cachedMarks, setCachedMarks] = useState([]);
  const [cachedCountries, setCachedCountries] = useState([]);

  const reportTools = {
    "Отчет о регистрации всех транспортных средств": [],
    "Отчет о регистрации всех транспортных средств, совершенных определенным автовладельцем": [<ComboBox label={"Владелец"} items={cachedUsers} displayProperty={"name"} onChange={onSelectEntity} />],
    "Отчет обо всех регистрациях определенного транспортного средства": [<ComboBox label={"Транспортное средство"} items={cachedVehicles} displayProperty={"name"} onChange={onSelectEntity} />],
    "Отчет о регистрации транспортных средств определенной марки и страны": [
      <ComboBox label={"Страна"} items={cachedCountries} displayProperty={"name"} onChange={onAnotherSelectEntity} />,
      <ComboBox label={"Марка"} items={cachedMarks} displayProperty={"name"} onChange={onSelectEntity} />
    ]
  };

  useEffect(() => {
    const cacheUsers = async () => {
      const users = await getAllUsers();
      if (users.status != 200)
        alert(users.data)
      else
        setCachedUsers(users.data.map(e => ({ property: "user_id", id: e.id, name: `${e.last_name} ${e.name} ${e.middle_name}` })));
    };

    const cacheVehicles = async () => {
      const users = await getAllVehicles();

      if (users.status != 200)
        alert(users.data)
      else
        setCachedVehicles(users.data.map(e => ({ property: "vehicle_id", id: e.id, name: `${e.vehicle_model.vehicle_mark.name} ${e.vehicle_model.name} (${e.vehicle_model.vehicle_mark.short_name}, ${e.vehicle_model.short_name})` })));
    };

    const cacheMarks = async () => {
      const users = await getAllMarks();

      if (users.status != 200)
        alert(users.data)
      else
        setCachedMarks(users.data.map(e => ({ property: "vehicle_mark_id", id: e.id, name: e.name })));
    };

    const cacheCountries = async () => {
      const users = await getAllCountries();

      if (users.status != 200)
        alert(users.data)
      else
        setCachedCountries(users.data.map(e => ({ property: "country_id", id: e.id, name: e.name })));
    };

    cacheUsers();
    cacheVehicles();
    cacheMarks();
    cacheCountries();
  }, [title]);

  return (
    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "10px", borderBottom: "1px solid #ccc" }}>
      <h2>{title}</h2>{reportTools[title]}
    </div>
  );
};