import React from "react";

const BattingCard = ({
  players,
  remainingBatters,
  isCaptain,
  isWicketKeeper,
}) => {
  return (
    <div className="bg-white shadow-md rounded-lg p-6 mb-8">
      <h3 className="text-xl font-semibold mb-4">Batting</h3>
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="bg-gray-200">
              <th className="px-4 py-2 text-left">Batsman</th>
              <th className="px-4 py-2 text-left">Runs</th>
              <th className="px-4 py-2 text-left">Balls</th>
              <th className="px-4 py-2 text-left">Strike Rate</th>
            </tr>
          </thead>
          <tbody>
            {players.map((batsman, index) => (
              <tr
                key={index}
                className={index % 2 === 0 ? "bg-gray-100" : "bg-white"}
              >
                <td className="px-4 py-2">
                  {batsman.name}{" "}
                  {isCaptain && index === 0 && (
                    <span className="text-sm text-gray-500">(C)</span>
                  )}
                  {isWicketKeeper && index === 0 && (
                    <span className="text-sm text-gray-500">(WK)</span>
                  )}
                </td>
                <td className="px-4 py-2">{batsman.runs}</td>
                <td className="px-4 py-2">{batsman.balls}</td>
                <td className="px-4 py-2">{batsman.strikerate}</td>
              </tr>
            ))}
            {/* Display remaining batters */}
            {/* {remainingBatters.length > 0 && (
              <tr>
                <td colSpan="4" className="px-4 py-2">
                  Remaining Batters: {remainingBatters.join(", ")}
                </td>
              </tr>
            )} */}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default BattingCard;
