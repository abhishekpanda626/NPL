import React from "react";

const Batsman = ({ label, value, onChange }) => {
  return (
    <div>
      <label htmlFor={label} className="block text-gray-700">
        {label}
      </label>
      <input
        type="text"
        id={label}
        name={label}
        value={value}
        onChange={onChange}
        className="w-full border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:border-blue-500"
        placeholder={`Enter ${label}`}
        required
      />
    </div>
  );
};

export default Batsman;
