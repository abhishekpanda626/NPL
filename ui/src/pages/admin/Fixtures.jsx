import React, { useState, useEffect } from "react";
import { FaPlusCircle } from "react-icons/fa";

const Fixtures = () => {
  const [teams, setTeams] = useState([]);
  const [matches, setMatches] = useState([]);
  const [leagueMatches, setLeagueMatches] = useState([]);
  const [knockoutMatches, setKnockoutMatches] = useState([]);

  // Dummy data for teams
  const dummyTeams = [
    "Team A",
    "Team B",
    "Team C",
    "Team D",
    "Team E",
    "Team F",
  ];

  useEffect(() => {
    // Set dummy teams initially
    setTeams(dummyTeams);
  }, []);

  const handleAddMatch = (e) => {
    e.preventDefault();
    const team1 = e.target.elements.team1.value;
    const team2 = e.target.elements.team2.value;
    const matchType = e.target.elements.matchType.value;
    const newMatch = {
      team1,
      team2,
      matchType,
    };
    setMatches([...matches, newMatch]);
    e.target.reset();
  };

  // Function to separate matches into leagues and knockouts
  useEffect(() => {
    const leagueMatches = matches.filter(
      (match) => match.matchType !== "semi-final" && match.matchType !== "final"
    );
    const knockoutMatches = matches.filter(
      (match) => match.matchType === "semi-final" || match.matchType === "final"
    );
    setLeagueMatches(leagueMatches);
    setKnockoutMatches(knockoutMatches);
  }, [matches]);

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8 text-center">Create Fixtures</h1>
      {/* Add Match Form */}
      <div className="mb-12">
        <h2 className="text-xl font-semibold mb-4">Add Match</h2>
        <form onSubmit={handleAddMatch} className="grid grid-cols-2 gap-8">
          <div>
            <label htmlFor="team1" className="block text-gray-700">
              Team 1
            </label>
            <select
              id="team1"
              name="team1"
              className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:border-blue-500"
              required
            >
              <option value="">Select Team 1</option>
              {teams.map((team, index) => (
                <option key={index} value={team}>
                  {team}
                </option>
              ))}
            </select>
          </div>
          <div>
            <label htmlFor="team2" className="block text-gray-700">
              Team 2
            </label>
            <select
              id="team2"
              name="team2"
              className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:border-blue-500"
              required
            >
              <option value="">Select Team 2</option>
              {teams.map((team, index) => (
                <option key={index} value={team}>
                  {team}
                </option>
              ))}
            </select>
          </div>
          <div>
            <label htmlFor="matchType" className="block text-gray-700">
              Match Type
            </label>
            <input
              type="text"
              id="matchType"
              name="matchType"
              className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:border-blue-500"
              placeholder="Enter match number or type (e.g., semi-final, final)"
              required
            />
          </div>
          <button
            type="submit"
            className="col-span-2 bg-blue-500 text-white font-semibold px-6 py-3 rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600"
          >
            Add Match
          </button>
        </form>
      </div>
      {/* Display Matches */}
      <div className="mb-8 ">
        <h2 className="text-xl font-semibold mb-4">League Matches</h2>
        <ul className="grid grid-cols-1 gap-4 max-h-[13rem] overflow-auto">
          {leagueMatches.map((match, index) => (
            <li
              key={index}
              className="bg-white shadow-md rounded-lg p-4 flex items-center justify-between"
            >
              <div>
                <p className="text-lg font-semibold">
                  {match.team1} vs {match.team2}
                </p>
                <p className="text-sm text-gray-500">
                  Match Type: {match.matchType}
                </p>
              </div>
              <button className="text-blue-500 hover:text-blue-600 focus:outline-none">
                View Details
              </button>
            </li>
          ))}
        </ul>
      </div>
      {/* Knockout Matches */}
      <div>
        <h2 className="text-xl font-semibold mb-4">Knockout Matches</h2>
        <ul className="grid grid-cols-1 gap-4 max-h-[20rem] overflow-auto">
          {knockoutMatches.map((match, index) => (
            <li
              key={index}
              className="bg-white shadow-md rounded-lg p-4 flex items-center justify-between"
            >
              <div>
                <p className="text-lg font-semibold">
                  {match.team1} vs {match.team2}
                </p>
                <p className="text-sm text-gray-500">
                  Match Type: {match.matchType}
                </p>
              </div>
              <button className="text-blue-500 hover:text-blue-600 focus:outline-none">
                View Details
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Fixtures;
