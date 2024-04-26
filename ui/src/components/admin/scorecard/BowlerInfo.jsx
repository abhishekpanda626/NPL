import React from "react";

const BowlerInfo = ({ value }) => {
  return (
    <div className="mb-4">
      <p className="font-semibold text-lg">Bowler</p>
      <p className="text-sm">Name: {value}</p>
      <p className="text-sm">Score: {value.runs + value.extras}</p>
    </div>
  );
};

export default BowlerInfo;
