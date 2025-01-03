import React from "react";

export function DataList({ data }) {
  return (
    <table style={{ width: "100%", borderCollapse: "collapse" }}>
      <thead>
        <tr>
          {data.length > 0 &&
            Object.keys(data[0]).map((key) => (
              <th key={key} style={{ border: "1px solid #ccc", padding: "5px" }}>
                {key}
              </th>
            ))}
        </tr>
      </thead>
      <tbody>
        {data.map((item) => (
          <tr key={item.id}>
            {Object.values(item).map((value, idx) => (
              <td key={idx} style={{ border: "1px solid #ccc", padding: "5px" }}>
                {value}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
};