import React, { useEffect, useState } from "react";
import { getReport1Data, getReport2Data, getReport3Data, getReport4Data } from '../api';
import { ReportDataList } from "./reports-body-datalist";

export function ReportBody({ currentReport, currentEntity, currentAnotherEntity }) {
  const [cachedRegistrations, setCachedRegistrations] = useState([]);

  const reportTools = {
    "Отчет о регистрации всех транспортных средств": { body: <ReportDataList data={cachedRegistrations} />, fetchData: getReport1Data },
    "Отчет о регистрации всех транспортных средств, совершенных определенным автовладельцем": { body: <ReportDataList data={cachedRegistrations} />, fetchData: getReport2Data },
    "Отчет обо всех регистрациях определенного транспортного средства": { body: <ReportDataList data={cachedRegistrations} />, fetchData: getReport3Data },
    "Отчет о регистрации транспортных средств определенной марки и страны": { body: <ReportDataList data={cachedRegistrations} />, fetchData: getReport4Data }
  };

  useEffect(() => {
    const cacheRegistrations = async () => {
      const registrations = await reportTools[currentReport].fetchData(currentEntity?.id, currentAnotherEntity?.id);
      console.log(registrations);
      if (registrations.status == 200)
        setCachedRegistrations(registrations.data);
    };

    cacheRegistrations();
  }, [currentReport, (currentEntity || currentAnotherEntity)]);

  return <div>
    {reportTools[currentReport].body}
  </div>
}