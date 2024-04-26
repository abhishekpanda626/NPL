import React from "react";
import TeamInnings from "../components/TeamInnings";


const ScoreCard = () => {
  // Sample data for non-admin users
  const team1Data = {
    total: 157,
    totalBallsBowled: 42,
    battingPlayers: [
      { name: "Player 1", role: "Batsman" },
      { name: "Player 2", role: "Batsman" },
      { name: "Player 3", role: "Batsman" },
      { name: "Player 4", role: "Batsman" },
      { name: "Player 5", role: "Batsman" },
      { name: "Player 6", role: "Batsman" },
      { name: "Player 7", role: "Batsman" },
      { name: "Player 8", role: "Batsman" },
      { name: "Player 9", role: "Batsman" },
      { name: "Player 10", role: "Batsman" },
      { name: "Player 11", role: "Batsman" },
    ],
    bowlingPlayers: [
      { name: "Player 1", role: "Bowler" },
      { name: "Player 2", role: "Bowler" },
    ],
  };

  const team2Data = {
    total: 120,
    totalBallsBowled: 48,
    battingPlayers: [
      { name: "Player A", role: "Batsman" },
      { name: "Player B", role: "Batsman" },
      { name: "Player C", role: "Batsman" },
      { name: "Player D", role: "Batsman" },
      { name: "Player E", role: "Batsman" },
      { name: "Player F", role: "Batsman" },
      { name: "Player G", role: "Batsman" },
      { name: "Player H", role: "Batsman" },
      { name: "Player I", role: "Batsman" },
      { name: "Player J", role: "Batsman" },
      { name: "Player K", role: "Batsman" },
    ],
    bowlingPlayers: [
      { name: "Player A", role: "Bowler" },
      { name: "Player B", role: "Bowler" },
    ],
  };

  return (
    <div className="bg-gray-200 min-h-screen flex flex-col items-center justify-center">
      <div className="max-w-4xl w-full bg-white shadow-md rounded-lg p-8">
        <h1 className="text-3xl font-bold mb-6 text-center text-gray-800">
          Team 1 VS Team 2
        </h1>
        <TeamInnings
          title="Team 1"
          battingPlayers={team1Data.battingPlayers}
          bowlingPlayers={team1Data.bowlingPlayers}
        />
        <TeamInnings
          title="Team 2"
          battingPlayers={team2Data.battingPlayers}
          bowlingPlayers={team2Data.bowlingPlayers}
        />
      </div>
    </div>
  );
};

export default ScoreCard;
