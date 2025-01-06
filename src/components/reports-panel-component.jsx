import React, { useEffect, useState } from "react";
import { Sidebar } from "./reports-panel-sidebar-component";
import { Header } from "./reports-panel-header-component";

export function ReportsPanel() {
  const reports = [
    "Отчет о регистрации всех транспортных средств",
    "Отчет о регистрации всех транспортных средств, совершенных определенным автовладельцем",
    "Отчет обо всех регистрациях определенного транспортного средства",
    "Отчет о регистрации транспортных средств определенной марки  и страны"
  ];

  const [currentReport, setCurrentReport] = useState(reports[0]);

  return (
    <div style={{ display: "flex", height: "100vh" }}>
      <Sidebar
        reports={reports}
        currentReport={currentReport}
        onSelectReport={setCurrentReport}
      />
      <div style={{ flex: 1, display: "flex", flexDirection: "column" }}>
        <Header title={currentReport} />
        <div style={{ flex: 1, overflow: "auto" }}>
          
        </div>
      </div>
    </div>
  );
}