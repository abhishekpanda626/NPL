import React from "react";

const Extras = ({ handleExtras }) => {
  return (
    <div>
      <label className="block text-gray-700">Extras</label>
      <div className="flex space-x-2">
        {["wd", "nb", "lb", "b"].map((extra, index) => (
          <button
            key={index}
            type="button"
            className="bg-blue-500 text-white font-semibold px-4 py-2 rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600"
            onClick={() => handleExtras(1)}
          >
            {extra}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Extras;
