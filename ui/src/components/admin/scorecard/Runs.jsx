import React from "react";

const Runs = ({ handleRuns }) => {
  return (
    <div>
      <label className="block text-gray-700">Runs</label>
      <div className="flex space-x-2">
        {[0, 1, 2, 3, 4, 6].map((run) => (
          <button
            key={run}
            type="button"
            className="bg-blue-500 text-white font-semibold px-4 py-2 rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600"
            onClick={() => handleRuns(run)}
          >
            {run}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Runs;
