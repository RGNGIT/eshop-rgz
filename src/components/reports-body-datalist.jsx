import React from "react";

export function ReportDataList({ data }) {
  console.log(data);

  return (
    <table style={{ width: "100%", borderCollapse: "collapse" }}>
      <thead>
        <tr>
          {data.length > 0 &&
            Object.keys(data[0]).map((key) => (
              <th key={key} style={{ border: "1px solid #ccc", borderTop: "0px", borderLeft: "0px", padding: "5px", ...(key === "id" && { width: "100px" }) }}>
                {key}
              </th>
            ))}
        </tr>
      </thead>
      <tbody>
        {data.map((item) => (
          <tr key={item.id}>
            {Object.values(item).map((value, idx) => (
              <td key={idx} style={{ textAlign: "left", border: "1px solid #ccc", padding: "5px", ...(idx == 0 && { borderLeft: "0px" }) }}>
                {value}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
};