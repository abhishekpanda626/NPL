import React from "react";

const Wicket = ({ handleWicket }) => {
  return (
    <div>
      <button
        type="button"
        className="bg-red-500 text-white font-semibold px-4 py-2 rounded-md hover:bg-red-600 focus:outline-none focus:bg-red-600"
        onClick={handleWicket}
      >
        Wicket
      </button>
    </div>
  );
};

export default Wicket;
