import React, { useState } from "react";
import { FaPlusCircle, FaMinusCircle } from "react-icons/fa";

const Players = () => {
  const [players, setPlayers] = useState([{ name: "", role: "", team: "" }]);
  const [teams] = useState(["Team A", "Team B", "Team C"]); // Dummy teams

  const handleInputChange = (index, event) => {
    const { name, value } = event.target;
    const updatedPlayers = [...players];
    updatedPlayers[index][name] = value;
    setPlayers(updatedPlayers);
  };

  const handleAddPlayer = () => {
    setPlayers([...players, { name: "", role: "", team: "" }]);
  };

  const handleRemovePlayer = (index) => {
    const updatedPlayers = [...players];
    updatedPlayers.splice(index, 1);
    setPlayers(updatedPlayers);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your logic to add players
    console.log("Added players:", players);
    // Reset form
    setPlayers([{ name: "", role: "", team: "" }]);
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6 text-center">Add Players</h1>
      <form
        onSubmit={handleSubmit}
        className="space-y-8 max-h-[40rem] overflow-auto"
      >
        {players.map((player, index) => (
          <div key={index} className="border border-gray-300 rounded-lg p-6">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <label
                  htmlFor={`playerName${index}`}
                  className="block text-gray-700"
                >
                  Player Name
                </label>
                {index > 0 && (
                  <FaMinusCircle
                    className="text-red-500 cursor-pointer"
                    onClick={() => handleRemovePlayer(index)}
                  />
                )}
              </div>
              <input
                type="text"
                id={`playerName${index}`}
                name="name"
                value={player.name}
                onChange={(e) => handleInputChange(index, e)}
                className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:border-blue-500"
                placeholder="Enter player name"
                required
              />
              <label
                htmlFor={`playerRole${index}`}
                className="block text-gray-700"
              >
                Player Role
              </label>
              <select
                id={`playerRole${index}`}
                name="role"
                value={player.role}
                onChange={(e) => handleInputChange(index, e)}
                className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:border-blue-500"
                required
              >
                <option value="">Select player role</option>
                <option value="Batsman">Batsman</option>
                <option value="Bowler">Bowler</option>
                <option value="Wicket Keeper">Wicket Keeper</option>
                <option value="All Rounder">All Rounder</option>
              </select>
              <label
                htmlFor={`teamName${index}`}
                className="block text-gray-700"
              >
                Team Name
              </label>
              <select
                id={`teamName${index}`}
                name="team"
                value={player.team}
                onChange={(e) => handleInputChange(index, e)}
                className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:border-blue-500"
                required
              >
                <option value="">Select team</option>
                {teams.map((team, teamIndex) => (
                  <option key={teamIndex} value={team}>
                    {team}
                  </option>
                ))}
              </select>
            </div>
          </div>
        ))}
        <div className="flex justify-center">
          <button
            type="button"
            onClick={handleAddPlayer}
            className="flex items-center justify-center bg-blue-500 text-white font-semibold px-4 py-2 rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600"
          >
            <FaPlusCircle className="mr-2" />
            Add Player
          </button>
        </div>
        <div className="flex justify-center">
          <button
            type="submit"
            className="bg-blue-500 text-white font-semibold px-6 py-3 rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default Players;
