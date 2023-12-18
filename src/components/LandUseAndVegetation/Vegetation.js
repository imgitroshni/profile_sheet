// ExcelTable.js
import React, { useState } from "react";

const VegetationTable = () => {
  const [rows, setRows] = useState([
    { id: 1, data: [""] }, // Example initial row
  ]);

  const addRow = () => {
    const newRow = {
      id: rows.length + 1,
      data: [""],
    };
    setRows([...rows, newRow]);
  };

  const handleInputChange = (e, rowIndex, colIndex) => {
    const updatedRows = [...rows];
    updatedRows[rowIndex].data[colIndex] = e.target.value;
    setRows(updatedRows);
  };

  return (
    <div className="container mx-auto border border-black md:p-4 p-2 xl:text-[0.9rem] md:text-[0.7rem] text-[0.5rem] overflow-auto">
      <table className="w-full table-auto">
        <thead>
          <tr>
            <th className="border px-2 py-2">#</th>
            <th className="border px-2 py-2">Vegetation</th>
            
          </tr>
        </thead>
        <tbody>
          {rows.map((row, index) => (
            <tr key={row.id}>
              <td className="border px-4 py-2">{row.id}</td>
              {row.data.map((cell, cellIndex) => (
                <td key={cellIndex} className="border px-4 py-2">
                  <input
                    type="text"
                    value={cell}
                    onChange={(e) => handleInputChange(e, index, cellIndex)}
                    className="w-full outline-none"
                  />
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
      <button
        onClick={addRow}
        className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
      >
        Add Row
      </button>
    </div>
  );
};

export default VegetationTable;
