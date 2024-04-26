import React, { useState } from "react";
import { Link } from "react-router-dom";
import MatchCard from "../components/match/MatchCard";

function HomePage() {
  // Sample match data
  const [matches] = useState([
    {
      id: 1,
      team: "Team A",
      opponent: "Team B",
      date: "April 20, 2024",
      result: "Team A won by 10 runs",
      status: "completed",
    },
    {
      id: 2,
      team: "Team A",
      opponent: "Team C",
      date: "April 15, 2024",
      result: "Match abandoned due to rain",
      status: "cancelled",
    },
    {
      id: 3,
      team: "Team A",
      opponent: "Team D",
      date: "April 10, 2024",
      result: "Team A requires 20 runs to win",
      status: "live",
    },
  ]);

  return (
    <div className="HomePage bg-gray-100 min-h-screen flex flex-col items-center justify-center">
      <header className="max-w-xl w-full text-center">
        <h1 className="text-3xl font-bold mb-4">
          NPL - National Premier League
        </h1>
        <div className="mb-8">
          <Link to="/score-update" className="text-blue-500 hover:underline">
            Update Scores
          </Link>
        </div>
      </header>
      <div className="max-w-xl w-full">
        {matches.map((match) => (
          <MatchCard key={match.id} match={match} />
        ))}
      </div>
    </div>
  );
}

export default HomePage;
