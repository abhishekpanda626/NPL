import React from "react";

const Bowler = ({ value, onChange }) => {
  return (
    <div>
      <label htmlFor="bowlerName" className="block text-gray-700">
        Bowler Name
      </label>
      <input
        type="text"
        id="bowlerName"
        name="bowlerName"
        value={value}
        onChange={onChange}
        className="w-full border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:border-blue-500"
        placeholder="Enter bowler name"
        required
      />
    </div>
  );
};

export default Bowler;
