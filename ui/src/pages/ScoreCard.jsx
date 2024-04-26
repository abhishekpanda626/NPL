import React from "react";
import BattingCard from "../components/BattingCard";
import BowlingCard from "../components/BowlingCard";

const ScoreCard = ({ role }) => {
  // Sample data for non-admin users
  const nonAdminData = {
    total: 157,
    totalBallsBowled: 42,
    batsmen: [
      { name: "Batsman 1", runs: 65, balls: 42 },
      { name: "Batsman 2", runs: 42, balls: 35 },
    ],
    bowlers: [
      { name: "Bowler 1", overs: 4 },
      { name: "Bowler 2", overs: 3.2 },
    ],
  };
  const allPlayers = [
    "Batsman 1",
    "Batsman 2",
    "Batsman 3",
    "Batsman 4",
    "Batsman 5",
    "Batsman 6",
    "Batsman 7",
    "Batsman 8",
    "Batsman 9",
    "Batsman 10",
    "Batsman 11",
  ];
  const isCaptain = true;
  const isWicketKeeper = false;
  const remainingBatters = allPlayers.filter(
    (player) => !nonAdminData.batsmen.some((batsman) => batsman.name === player)
  );
  const allBowlerStats = [
    { name: "Bowler 1", overs: 4, runs: 20, wickets: 1, economy: 5 },
    { name: "Bowler 2", overs: 3.2, runs: 25, wickets: 0, economy: 6.25 },
  ];
  return (
    <div className="bg-gray-200 min-h-screen flex flex-col items-center justify-center">
      <div className="max-w-4xl w-full bg-white shadow-md rounded-lg p-8">
        <h1 className="text-3xl font-bold mb-6 text-center text-gray-800">
          Cricket Score Page (Cricbuzz Style)
        </h1>
        {/* Batting Card */}
        <BattingCard
          batsmen={nonAdminData.batsmen}
          remainingBatters={remainingBatters}
          isCaptain={isCaptain}
          isWicketKeeper={isWicketKeeper}
        />
        {/* Bowling Card */}
        <BowlingCard
          bowlers={nonAdminData.bowlers}
          isCaptain={isCaptain}
          isWicketKeeper={isWicketKeeper}
          allBowlerStats={allBowlerStats}
        />
        {/* Total Score */}
        <div className="mt-4 text-center">
          <h3 className="text-lg font-semibold mb-2">Total Score</h3>
          <p className="text-2xl">
            {nonAdminData.total + "(" + nonAdminData.totalBallsBowled + ")"}
          </p>
        </div>
      </div>
    </div>
  );
};

export default ScoreCard;
