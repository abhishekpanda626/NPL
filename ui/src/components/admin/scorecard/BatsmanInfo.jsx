import React from "react";

const BatsmanInfo = ({ label, value }) => {
  return (
    <div className="mb-4">
      <p className="font-semibold text-lg">{label}</p>
      <p className="text-sm">Name: {value.name}</p>
      <p className="text-sm">Runs: {value.runs}</p>
    </div>
  );
};

export default BatsmanInfo;
