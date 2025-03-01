// src/LicensePlateRow.js
import React from 'react';

const LicensePlateRow = ({ plate, model, color, status, gate }) => (
  <tr className="border-b">
    <td className="p-4 flex items-center space-x-2">
      <i className="fas fa-car text-gray-500"></i>
      <span>{plate}</span>
    </td>
    <td className="p-4">{model}</td>
    <td className="p-4">{color}</td>
    <td className="p-4">{status}</td>
    <td className="p-4">{gate}</td>
    <td className="p-4 text-right">
      <i className="fas fa-ellipsis-h text-gray-500"></i>
    </td>
  </tr>
);

export default LicensePlateRow;