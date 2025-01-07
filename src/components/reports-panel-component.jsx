import React, { useEffect, useState } from "react";
import { Sidebar } from "./reports-panel-sidebar-component";
import { Header } from "./reports-panel-header-component";
import { ReportBody } from "./report-body-component";

export function ReportsPanel() {
  const reports = [
    "Отчет о регистрации всех транспортных средств",
    "Отчет о регистрации всех транспортных средств, совершенных определенным автовладельцем",
    "Отчет обо всех регистрациях определенного транспортного средства",
    "Отчет о регистрации транспортных средств определенной марки и страны"
  ];

  const [currentReport, setCurrentReport] = useState(reports[0]);
  const [currentEntity, setCurrentEntity] = useState({});
  const [currentAnotherEntity, setCurrentAnotherEntity] = useState({});

  function onSelectEntity(e) {
    setCurrentEntity(e);
  }

  function onSelectAnotherEntity(e) {
    setCurrentAnotherEntity(e);
  }

  return (
    <div style={{ display: "flex", height: "100vh" }}>
      <Sidebar
        reports={reports}
        currentReport={currentReport}
        onSelectReport={setCurrentReport}
      />
      <div style={{ flex: 1, display: "flex", flexDirection: "column" }}>
        <Header title={currentReport} onSelectEntity={onSelectEntity} onAnotherSelectEntity={onSelectAnotherEntity}/>
        <div style={{ flex: 1, overflow: "auto" }}>
          <ReportBody currentReport={currentReport} currentEntity={currentEntity} currentAnotherEntity={currentAnotherEntity}/>
        </div>
      </div>
    </div>
  );
}