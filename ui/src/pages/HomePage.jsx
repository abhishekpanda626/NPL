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
    <div className="HomePage bg-gradient-to-br from-blue-500 to-indigo-600 min-h-screen flex flex-col items-center justify-center">
      <header className="max-w-xl w-full text-center mb-8">
        <h1 className="text-4xl font-bold text-white mb-4">Welcome to Cricket Dashboard</h1>
        <Link to="/score-update" className="text-white hover:underline">
          Update Scores
        </Link>
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
