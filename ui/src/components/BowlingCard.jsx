import React from "react";

const BowlingCard = ({
  bowlers,
  isCaptain,
  isWicketKeeper,
  allBowlerStats,
}) => {
  return (
    <div className="bg-white shadow-md rounded-lg p-6 mb-8">
      <h3 className="text-lg font-semibold mb-2">Bowling</h3>

      {/* Bowler Stats */}
      <div className="mt-6">
        <table className="w-full">
          <thead>
            <tr className="bg-gray-200">
              <th className="px-4 py-2 text-left">Bowler</th>
              <th className="px-4 py-2 text-left">Overs</th>
              <th className="px-4 py-2 text-left">Runs</th>
              <th className="px-4 py-2 text-left">Wickets</th>
              <th className="px-4 py-2 text-left">Economy</th>
            </tr>
          </thead>
          <tbody className="">
            {allBowlerStats.map((bowler, index) => (
              <tr
                key={index}
                className={index % 2 === 0 ? "bg-gray-100" : "bg-white"}
              >
                <td className="px-4 py-2 ">
                  {bowler.name}{" "}
                  {isCaptain && index === 0 && (
                    <span className="text-sm text-gray-500">(C)</span>
                  )}
                  {isWicketKeeper && index === 0 && (
                    <span className="text-sm text-gray-500">(WK)</span>
                  )}
                  {index === 0 && (
                    <span className="text-sm px-1 text-red-500">*</span>
                  )}
                </td>
                <td className="px-4 py-2">{bowler.overs}</td>
                <td className="px-4 py-2">{bowler.runs}</td>
                <td className="px-4 py-2">{bowler.wickets}</td>
                <td className="px-4 py-2">{bowler.economy}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default BowlingCard;
