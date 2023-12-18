// ExcelTable.js
import React, { useState } from 'react';

const MorphologicalTable2 = () => {
  const [rows, setRows] = useState([
    { id: 1, data: ['', '', '', '', '', '', '', '',] }, // Example initial row
  ]);

  const addRow = () => {
    const newRow = {
      id: rows.length + 1,
      data: ['', '', '', '', '', '', '', '' ],
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
            <th className="border px-2 py-2">Mottles/ Redox features <br/> Qty Sz Cn Col Sp Loc</th>
            <th className="border px-2 py-2">Coats/Films/Stress features <br/> Amt Dst Cont Kd Loc Col</th>
            <th className="border px-2 py-2">Concentrations (Conca, Conir, etc.,) <br/> Qty Sz Cn Kd Col</th>
            <th className="border px-2 py-2">Roots <br/> Qty Sz Lc</th> 
            <th className="border px-2 py-2">Pores <br/> Qty Sz Shp</th>
            <th className="border px-2 py-2">pH</th>
            <th className="border px-2 py-2">Effer (dil Hcl)- 1,2,3</th>
            <th className="border px-2 py-2">Sample bag No.</th>
           
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

export default MorphologicalTable2;
