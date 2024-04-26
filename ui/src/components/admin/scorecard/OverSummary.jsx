import React from "react";

const OverSummary = ({ overData }) => {
    console.log(overData)
  return (
    <div className="bg-gray-200 p-2 rounded-md">
      <p className="font-semibold">Over Summary</p>
      <div className=" pl-4 flex gap-4">
        {overData.map((ball, index) => (
          <span
            className=" w-12 h-12 rounded-[100%] bg-green-700 text-white flex items-center justify-center text-xl "
            key={index}
          >
            {ball}
          </span>
        ))}
      </div>
    </div>
  );
};

export default OverSummary;
